import cx from "clsx";
import { useState } from "react";
import {
  Table,
  Checkbox,
  ScrollArea,
  Group,
  Avatar,
  Text,
  rem,
  Button,
  Space,
} from "@mantine/core";
import classes from "./TableSelection.module.css";

const data = [
  {
    id: "1",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
    name: "Robert Wolfkisser",
    job: "Engineer",
    email: "rob_wolf@gmail.com",
  },
  {
    id: "2",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",
    name: "Jill Jailbreaker",
    job: "Engineer",
    email: "jj@breaker.com",
  },
  {
    id: "3",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
    name: "Henry Silkeater",
    job: "Designer",
    email: "henry@silkeater.io",
  },
  {
    id: "4",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
    name: "Bill Horsefighter",
    job: "Designer",
    email: "bhorsefighter@gmail.com",
  },
  {
    id: "5",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png",
    name: "Jeremy Footviewer",
    job: "Manager",
    email: "jeremy@foot.dev",
  },
];

export function TableSelection({ mocks }) {
  console.log(mocks);
  const [selection, setSelection] = useState([]);
  const toggleRow = (id) =>
    setSelection((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  const toggleAll = () =>
    setSelection((current) =>
      current.length === mocks.length ? [] : mocks.map((item) => item.id)
    );

  // Function to handle nested objects/arrays
  const renderCellContent = (value) => {
    if (value && typeof value === "object") {
      if (Array.isArray(value)) {
        return value.join(", ");
      } else if (value !== null) {
        return Object.entries(value)
          .map(([key, val]) => `${key}: ${val}`)
          .join(", ");
      }
    }
    return value;
  };

  // Generate column headers dynamically
  const columns = mocks.length > 0 ? Object.keys(mocks[0]) : [];

  const rows = mocks.map((item) => {
    const selected = selection.includes(item.id);
    return (
      <Table.Tr
        key={item.id}
        className={cx({ [classes.rowSelected]: selected })}
      >
        <Table.Td>
          <Checkbox
            checked={selection.includes(item.id)}
            onChange={() => toggleRow(item.id)}
          />
        </Table.Td>
        {columns.map((column) => (
          <Table.Td key={column}>
            {column === "avatar" ? (
              <Group gap="sm">
                <Avatar size={26} src={item[column]} radius={26} />
              </Group>
            ) : (
              <Text size="sm" fw={500}>
                {renderCellContent(item[column])}
              </Text>
            )}
          </Table.Td>
        ))}
      </Table.Tr>
    );
  });

  // Export data as JSON
  const exportJSON = () => {
    const dataStr = JSON.stringify(mocks, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "table_data.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  // Export data as CSV
  const exportCSV = () => {
    const headers = columns.join(",");
    const rows = mocks.map((item) =>
      columns.map((column) => renderCellContent(item[column])).join(",")
    );
    const csvContent = [headers, ...rows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "table_data.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "4px",
          float: "end",
          marginBottom: "20px",
        }}
      >
        <Button onClick={exportJSON}>Export JSON</Button>
        <Space w="xs" />
        <Button onClick={exportCSV}>Export CSV</Button>
      </div>
      <ScrollArea>
        <Table miw={800} verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th style={{ width: rem(40) }}>
                <Checkbox
                  onChange={toggleAll}
                  checked={selection.length === mocks.length}
                  indeterminate={
                    selection.length > 0 && selection.length !== mocks.length
                  }
                />
              </Table.Th>
              {columns.map((column) => (
                <Table.Th key={column}>
                  {column.charAt(0).toUpperCase() + column.slice(1)}
                </Table.Th>
              ))}
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </ScrollArea>
    </div>
  );
}
