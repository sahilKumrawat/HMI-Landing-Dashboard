// app/dashboard/profile/page.tsx
"use client";

import { useState, useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [loading, setLoading] = useState(true);

  // load profile on mount
  useEffect(() => {
    (async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      console.log("..............User data.......... ", session)

      if (!session?.user) {
        router.push("/signin");
        return;
      }

      setEmail(session.user.email || "");
      setFullName(session.user.user_metadata.full_name || "")
      setAvatarUrl(session.user.user_metadata.avatar_url || "")

      const userId = session.user.id;
      const { data: profile, error } = await supabase
        .from("profiles")
        .select("full_name, avatar_path")
        .eq("id", userId)
        .single();

      if (error) {
        console.error("Error loading profile:", error.message);
      } else if (profile) {
        setFullName(profile.full_name || session.user.user_metadata.full_name);
        if (profile.avatar_path) {
          const { data: urlData } = supabase
            .storage.from("avatars")
            .getPublicUrl(profile.avatar_path);
          setAvatarUrl(urlData.publicUrl || session.user.user_metadata.avatar_url);
        }
      }
      setLoading(false);
    })();
  }, [router, supabase]);

  // update profile
  const updateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session?.user) return;

    const userId = session.user.id;
    const { error } = await supabase
      .from("profiles")
      .upsert({ id: userId, full_name: fullName }, { onConflict: "id" });
    if (error) console.error("Update error", error.message);
    setLoading(false);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow space-y-6">
      <h1 className="text-2xl font-bold">Your Profile</h1>

      {/* Avatar */}
      <div className="flex items-center gap-4">
        <img
          src={avatarUrl || "/avatars/user.jpg"}
          alt="Avatar"
          className="h-16 w-16 rounded-full object-cover border"
        />
        <div>
          <label className="block text-sm font-medium text-gray-700">Change Avatar</label>
          <input
            type="file"
            accept="image/*"
            onChange={async (e) => {
              if (!e.target.files?.[0]) return;
              const file = e.target.files[0];
              const userId = (await supabase.auth.getSession()).data.session?.user.id;
              if (!userId) return;

              // upload to storage
              const fileExt = file.name.split(".").pop();
              const path = `${userId}/avatar.${fileExt}`;
              await supabase.storage.from("avatars").upload(path, file, { upsert: true });
              // save path in profile
              await supabase.from("profiles").upsert({ id: userId, avatar_path: path }, { onConflict: "id" });
              // refresh URL
              const { data: urlData } = supabase.storage.from("avatars").getPublicUrl(path);
              setAvatarUrl(urlData.publicUrl);
            }}
            className="mt-1 block w-full text-sm text-gray-600"
          />
        </div>
      </div>

      {/* Info form */}
      <form onSubmit={updateProfile} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            value={email}
            disabled
            className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          {loading ? "Saving…" : "Save changes"}
        </button>
      </form>
    </div>
  );
}
