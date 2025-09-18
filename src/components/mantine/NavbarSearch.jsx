import {
  TextInput,
  Code,
  UnstyledButton,
  Badge,
  Text,
  Group,
  ActionIcon,
  Tooltip,
  rem,
} from "@mantine/core";
import {
  IconBulb,
  IconUser,
  IconCheckbox,
  IconSearch,
  IconPlus,
} from "@tabler/icons-react";
import { UserButton } from "./UserButton";
import classes from "./NavbarSearch.module.css";
import { Link } from "react-router-dom";

const links = [
  { icon: IconBulb, label: "Dashboard", notifications: 3, url: "/" },
  {
    icon: IconCheckbox,
    label: "Progress Tracker",
    notifications: 4,
    url: "/manager",
  },
];

const collections = [
  { emoji: "🚚", label: "Equipments" },
  { emoji: "⏳", label: "Pendings" },
  { emoji: "💸", label: "Profits" },
  { emoji: "🌎", label: "Maps" },
];

export function NavbarSearch() {
  const mainLinks = links.map((link) => (
    <Link to={link.url}>
      <UnstyledButton key={link.label} className={classes.mainLink}>
        <div className={classes.mainLinkInner}>
          <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
          <span size={36}>{link.label}</span>
        </div>
        {link.notifications && (
          <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
            {link.notifications}
          </Badge>
        )}
      </UnstyledButton>
    </Link>
  ));

  const collectionLinks = collections.map((collection) => (
    <Link
      to={collection.label}
      key={collection.label}
      className={classes.collectionLink}
    >
      <span style={{ marginRight: rem(9), fontSize: rem(16) }}>
        {collection.emoji}
      </span>{" "}
      <span style={{ marginRight: rem(9), fontSize: rem(16) }}>
        {collection.label}
      </span>{" "}
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.section}>{/* <UserButton />        */}</div>

      <TextInput
        placeholder="Search"
        size="xs"
        leftSection={
          <IconSearch
            style={{ width: rem(12), height: rem(12) }}
            stroke={1.5}
          />
        }
        rightSectionWidth={70}
        rightSection={<Code className={classes.searchCode}>Ctrl + K</Code>}
        styles={{ section: { pointerEvents: "none" } }}
        mb="sm"
      />

      <div className={classes.section}>
        <div className={classes.mainLinks}>{mainLinks}</div>
      </div>

      <div className={classes.section}>
        <Group className={classes.collectionsHeader} justify="space-between">
          <Text size="xs" fw={500} c="dimmed">
            Collections
          </Text>
          <Tooltip label="Create collection" withArrow position="right">
            <ActionIcon variant="default" size={18}>
              <IconPlus
                style={{ width: rem(12), height: rem(12) }}
                stroke={1.5}
              />
            </ActionIcon>
          </Tooltip>
        </Group>
        <div className={classes.collections}>
          {collectionLinks}
          <a
            href="https://wkhsp-report---analytics-gd8rbqncxvkcfzjj2jg4zs.streamlit.app/"
            target="_blank"
            className={classes.collectionLink}
          >
            <span style={{ marginRight: rem(9), fontSize: rem(16) }}>📝</span>{" "}
            <span style={{ marginRight: rem(9), fontSize: rem(16) }}>
              AI Reports
            </span>{" "}
          </a>
          <a
            href="https://nagar-mitra-scheduler.onrender.com/"
            target="_blank"
            className={classes.collectionLink}
          >
            <span style={{ marginRight: rem(9), fontSize: rem(16) }}>🤖</span>{" "}
            <span style={{ marginRight: rem(9), fontSize: rem(16) }}>
              AI Scheduler
            </span>{" "}
          </a>
        </div>
      </div>
    </nav>
  );
}
