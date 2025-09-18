import { UnstyledButton, Group, Text, rem } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import classes from "./UserButton.module.css";

export function UserButton({ user, onClick }) {
  return (
    <UnstyledButton className={classes.user} onClick={onClick}>
      <Group>
        {/* <Avatar src={user.avatar} radius="xl" /> */}
        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            {user.name}
          </Text>

          <Text c="dimmed" size="xs">
            {user.email}
          </Text>
        </div>
        <IconChevronRight
          style={{ width: rem(14), height: rem(14) }}
          stroke={1.5}
        />
      </Group>
    </UnstyledButton>
  );
}

import { Card, Image } from "@mantine/core";

export function UserDetails({ user }) {
  return (
    <div className="flex gap-2">
      <div className="w-36">
        {/* <Image src={user.avatar} alt={user.name} /> */}
      </div>
      <div>
        <Text size="lg" weight={500}>
          {user.name}
        </Text>
        <Text size="sm">
          <span className="px-2 py-1 bg-gray-100"> emai:</span> {user.email}
        </Text>
        <Text size="sm">
          <span className="px-2 py-1 bg-gray-100"> managed by:</span>{" "}
          {user.email}
        </Text>
        <Text size="sm">
          <span className="px-2 py-1 bg-gray-100"> job title:</span>
        </Text>
      </div>
    </div>
  );
}
