import { Table, Progress, Anchor, Text, Group } from "@mantine/core";
import classes from "./TableReviews.module.css";

// Updated mock data
const data = [
  {
    emp_id: 1,
    emp_name: "Rajesh Kumar",
    role: "Laborer",
    total_workedhours: 150, // Example value
    required_working_hours: 200, // Example value
    joining_date: "2024-01-15",
  },
  {
    emp_id: 2,
    emp_name: "Sita Devi",
    role: "Foreman",
    total_workedhours: 180, // Example value
    required_working_hours: 220, // Example value
    joining_date: "2023-11-20",
  },
  {
    emp_id: 3,
    emp_name: "Amit Sharma",
    role: "Supervisor",
    total_workedhours: 210, // Example value
    required_working_hours: 250, // Example value
    joining_date: "2023-08-05",
  },
  {
    emp_id: 4,
    emp_name: "Meena Kumari",
    role: "Manager",
    total_workedhours: 190, // Example value
    required_working_hours: 200, // Example value
    joining_date: "2022-12-01",
  },
];

export default function TableReviews() {
  const rows = data.map((row) => {
    const percentageCompleted =
      (row.total_workedhours / row.required_working_hours) * 100;

    return (
      <Table.Tr key={row.emp_id}>
        <Table.Td>{row.emp_id}</Table.Td>
        <Table.Td>{row.emp_name}</Table.Td>
        <Table.Td>{row.role}</Table.Td>
        <Table.Td>
          {row.total_workedhours} / {row.required_working_hours} hours
        </Table.Td>
        <Table.Td>
          <Group justify="space-between">
            <Text fz="xs" c="teal" fw={700}>
              {percentageCompleted.toFixed(0)}%
            </Text>
          </Group>
          <Progress.Root>
            <Progress.Section
              className={classes.progressSection}
              value={percentageCompleted}
              color="teal"
            />
          </Progress.Root>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table.ScrollContainer minWidth={800}>
      <Table verticalSpacing="xs">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Employee ID</Table.Th>
            <Table.Th>Employee Name</Table.Th>
            <Table.Th>Role</Table.Th>
            <Table.Th>Worked / Required Hours</Table.Th>
            <Table.Th>Progress</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
/*  */
