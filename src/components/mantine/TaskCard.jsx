import {
  Card,
  Avatar,
  Text,
  Progress,
  Badge,
  Group,
  ActionIcon,
} from "@mantine/core";
// import { MantineLogo } from "@mantinex/mantine-logo";
import { IconUpload } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const avatars = [
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",
];

const outages = [
  {
    id: 1,
    title: "Electrical Outage - Sector A",
    description: "Power outage in Sector A due to maintenance work.",
    tasksCompleted: 15,
    totalTasks: 20,
    daysLeft: 3,
  },
  {
    id: 2,
    title: "Electrical Outage - Sector B",
    description: "Scheduled outage for infrastructure upgrade.",
    tasksCompleted: 10,
    totalTasks: 25,
    daysLeft: 5,
  },
  {
    id: 3,
    title: "Water Supply Disruption - Sector C",
    description: "Water supply disrupted due to pipeline maintenance.",
    tasksCompleted: 8,
    totalTasks: 15,
    daysLeft: 2,
  },
  {
    id: 4,
    title: "Road Repair - Main Street",
    description: "Road closure due to extensive repair work on Main Street.",
    tasksCompleted: 12,
    totalTasks: 20,
    daysLeft: 4,
  },
  {
    id: 5,
    title: "Gas Leak - Sector D",
    description: "Emergency response to gas leak reported in Sector D.",
    tasksCompleted: 5,
    totalTasks: 10,
    daysLeft: 1,
  },
  {
    id: 6,
    title: "Street Light Outage - Sector E",
    description: "Street lights not functioning in Sector E.",
    tasksCompleted: 7,
    totalTasks: 12,
    daysLeft: 3,
  },
  {
    id: 7,
    title: "Sewage Backup - Sector F",
    description: "Sewage system backup causing foul smell and overflow.",
    tasksCompleted: 6,
    totalTasks: 15,
    daysLeft: 5,
  },
  {
    id: 8,
    title: "Tree Fallen - Sector G",
    description: "Tree fallen due to storm, blocking the main road.",
    tasksCompleted: 4,
    totalTasks: 8,
    daysLeft: 2,
  },
  {
    id: 9,
    title: "Telecom Service Interruption - Sector H",
    description: "Telecom services interrupted due to cable damage.",
    tasksCompleted: 10,
    totalTasks: 18,
    daysLeft: 4,
  },
  {
    id: 10,
    title: "Internet Outage - Sector I",
    description: "Internet services down due to fiber optic cable issue.",
    tasksCompleted: 9,
    totalTasks: 15,
    daysLeft: 3,
  },
  {
    id: 11,
    title: "Garbage Collection Delay - Sector J",
    description: "Garbage collection delayed due to vehicle breakdown.",
    tasksCompleted: 5,
    totalTasks: 10,
    daysLeft: 2,
  },
  {
    id: 12,
    title: "Flooding - Sector K",
    description: "Flooding in Sector K due to heavy rainfall.",
    tasksCompleted: 11,
    totalTasks: 20,
    daysLeft: 5,
  },
  // Add more outage objects as needed
];

export function TaskCard({ outage }) {
  const { id, title, description, tasksCompleted, totalTasks, daysLeft } =
    outage;
  const progressValue = (tasksCompleted / totalTasks) * 100;

  return (
    <Card withBorder padding="lg" radius="md">
      <Group justify="space-between">
        {/* <MantineLogo type="mark" size="2rem" /> */}
        <Badge>{daysLeft} days left</Badge>
      </Group>

      <Text fz="lg" fw={500} mt="md">
        {title}
      </Text>
      <Text fz="sm" c="dimmed" mt={5}>
        {description}
      </Text>

      <Text c="dimmed" fz="sm" mt="md">
        Tasks completed:{" "}
        <Text span fw={500} c="bright">
          {tasksCompleted}/{totalTasks}
        </Text>
      </Text>

      <Progress value={progressValue} mt={5} />

      <Group justify="space-between" mt="md">
        <Avatar.Group spacing="sm">
          <Avatar src={avatars[0]} radius="xl" />
          <Avatar src={avatars[1]} radius="xl" />
          <Avatar src={avatars[2]} radius="xl" />
          <Avatar radius="xl">+5</Avatar>
        </Avatar.Group>
        <div className="flex items-center gap-2">
          <Link to={`/workshop?${id}`}>
            <Badge>view</Badge>
          </Link>
          <ActionIcon variant="default" size="lg" radius="md">
            <IconUpload size="1.1rem" />
          </ActionIcon>
        </div>
      </Group>
    </Card>
  );
}

export function TaskCardList() {
  return (
    <>
      {outages.map((outage) => (
        <TaskCard key={outage.id} outage={outage} />
      ))}
    </>
  );
}
