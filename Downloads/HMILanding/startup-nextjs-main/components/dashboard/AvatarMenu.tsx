
// components/dashboard/AvatarMenu.tsx
"use client";
import { useState, useEffect, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function AvatarMenu() {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [avatarUrl, setAvatarUrl] = useState<string>("/avatars/user.jpg");
  const [fullName, setFullName] = useState<string>("");

  useEffect(() => {
    async function loadProfile() {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session?.user) return;

      const u = session.user;
      const meta = (u.user_metadata ?? {}) as Record<string, any>;

      // 1) Use OAuth metadata first
      const picture = meta.picture || meta.avatar_url;
      const nameFromMeta = meta.full_name || meta.name;
      if (picture) setAvatarUrl(picture);
      if (nameFromMeta) setFullName(nameFromMeta);

      // 2) Fallback: fetch from profiles table
      const userId = u.id;
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("avatar_path, full_name")
        .eq("id", userId)
        .single();

      if (!profileError && profile) {
        if (profile.full_name && !nameFromMeta) {
          setFullName(profile.full_name);
        }
        if (profile.avatar_path) {
          const { data: urlData } = supabase.storage
            .from("avatars")
            .getPublicUrl(profile.avatar_path);
          setAvatarUrl(urlData.publicUrl);
        }
      }
    }

    loadProfile();
  }, [supabase]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/signin");
  };

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center gap-2 p-1 rounded hover:bg-gray-100 transition">
        <img
          src={avatarUrl}
          alt="User avatar"
          className="h-8 w-8 rounded-full object-cover"
        />
        {fullName && <span className="text-sm text-gray-700">{fullName}</span>}
        <ChevronDownIcon className="h-4 w-4 text-gray-600" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Menu.Items className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
          <Menu.Item>
            {({ active }) => (
              <Link
                href="/dashboard/profile"
                className={`block px-4 py-2 text-sm ${
                  active ? "bg-gray-100" : ""
                }`}
              >
                Profile
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={handleSignOut}
                className={`w-full text-left block px-4 py-2 text-sm ${
                  active ? "bg-gray-100" : ""
                }`}
              >
                Sign out
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
