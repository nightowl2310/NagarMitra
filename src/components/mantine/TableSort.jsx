import { useEffect, useState } from "react";
import {
  Table,
  ScrollArea,
  UnstyledButton,
  Group,
  Text,
  Center,
  TextInput,
  rem,
  keys,
  Badge,
} from "@mantine/core";
import {
  IconSelector,
  IconChevronDown,
  IconChevronUp,
  IconSearch,
} from "@tabler/icons-react";
import classes from "./TableSort.module.css";
import axios from "axios";

const axiosInst = axios.create({
  baseURL: "http://localhost:8080/",
});

export { axiosInst };

function Th({ children, reversed, sorted, onSort }) {
  const Icon = sorted
    ? reversed
      ? IconChevronUp
      : IconChevronDown
    : IconSelector;
  return (
    <Table.Th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group justify="space-between">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          <Center className={classes.icon}>
            <Icon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </Center>
        </Group>
      </UnstyledButton>
    </Table.Th>
  );
}

function filterData(data, search) {
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    keys(data[0]).some((key) =>
      item[key].toString().toLowerCase().includes(query)
    )
  );
}

function sortData(data, { sortBy, reversed, search }) {
  if (!sortBy) {
    return filterData(data, search);
  }

  return filterData(
    [...data].sort((a, b) => {
      if (reversed) {
        return b[sortBy].localeCompare(a[sortBy]);
      }

      return a[sortBy].localeCompare(b[sortBy]);
    }),
    search
  );
}

const data = [
  {
    emp_id: 1,
    emp_name: "Rajesh Kumar",
    role: "Laborer",
    total_workedhours: 150,
    required_working_hours: 200,
    joining_date: "2024-01-15",
  },
  {
    emp_id: 2,
    emp_name: "Sita Devi",
    role: "Foreman",
    total_workedhours: 180,
    required_working_hours: 220,
    joining_date: "2023-11-20",
  },
  {
    emp_id: 3,
    emp_name: "Amit Sharma",
    role: "Supervisor",
    total_workedhours: 210,
    required_working_hours: 250,
    joining_date: "2023-08-05",
  },
  {
    emp_id: 4,
    emp_name: "Meena Kumari",
    role: "Manager",
    total_workedhours: 190,
    required_working_hours: 200,
    joining_date: "2022-12-01",
  },
];

export function TableSort() {
  const [search, setSearch] = useState("");
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const setSorting = (field) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(data, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(
      sortData(data, { sortBy, reversed: reverseSortDirection, search: value })
    );
  };

  const rows = sortedData.map((row) => (
    <Table.Tr key={row.emp_id}>
      <Table.Td>{row.emp_name}</Table.Td>
      <Table.Td>
        <Badge>{row.role}</Badge>
      </Table.Td>
      <Table.Td>{row.total_workedhours}</Table.Td>
      <Table.Td>{row.required_working_hours}</Table.Td>
      <Table.Td>{row.joining_date}</Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea>
      <TextInput
        placeholder="Search by any field"
        mb="md"
        leftSection={
          <IconSearch
            style={{ width: rem(16), height: rem(16) }}
            stroke={1.5}
          />
        }
        value={search}
        onChange={handleSearchChange}
      />
      <Table
        horizontalSpacing="md"
        verticalSpacing="xs"
        miw={700}
        layout="fixed"
      >
        <Table.Tbody>
          <Table.Tr>
            <Th
              sorted={sortBy === "emp_name"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("emp_name")}
            >
              Name
            </Th>
            <Th
              sorted={sortBy === "role"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("role")}
            >
              Role
            </Th>
            <Th
              sorted={sortBy === "total_workedhours"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("total_workedhours")}
            >
              Total Worked Hours
            </Th>
            <Th
              sorted={sortBy === "required_working_hours"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("required_working_hours")}
            >
              Required Working Hours
            </Th>
            <Th
              sorted={sortBy === "joining_date"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("joining_date")}
            >
              Joining Date
            </Th>
          </Table.Tr>
        </Table.Tbody>
        <Table.Tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <Table.Tr>
              <Table.Td colSpan={Object.keys(data[0]).length}>
                <Text fw={500} ta="center">
                  Nothing found
                </Text>
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Tbody>
      </Table>
    </ScrollArea>
  );
}
