import { useEffect, useState } from "react";
import useStore from "./store";
import { Form, useFormik } from "formik";
import { createTheme, MantineProvider } from "@mantine/core";
import isAuth, { logout } from "./auths/authUtils";
import "@mantine/core/styles.css";
import HeaderMegaMenu from "./components/layout/Header";
import { DEFAULT_THEME } from "@mantine/core";
import ActionsGrid from "./components/layout/ActionsGrid";
import BadgeCard from "./components/layout/BadgeCard";
import TableReviews from "./components/layout/TableReviews";
import NavbarSimpleColored from "./components/layout/NavbarSimpleColored";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import StatsSegments from "./components/mantine/StatsSegments";
import { DndList } from "./components/DndList";
import { StatsRingCard } from "./components/mantine/StatsRingCard";
import { TaskCard, TaskCardList } from "./components/mantine/TaskCard";
import WorkshopBanner from "./components/mantine/WorkshopBanner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <TaskManagementAdmin />,
      },
      {
        path: "/manager",
        element: <TaskManagementManager />,
      },
      {
        path: "/workshop",
        element: <TaskManagementWorkshop />,
      },
      {
        path: "/complaints",
        element: <TableSelection mocks={Scheduling} />,
      },
      {
        path: "/equipments",
        element: <TableSelection mocks={Equipment} />,
      },
      {
        path: "/pendings",
        element: <TableSelection mocks={Pendings} />,
      },
      {
        path: "/Profits",
        element: <TableSelection mocks={Profits} />,
      },
      {
        path: "/Reports",
        element: <TableSelection />,
      },

      {
        path: "/Maps",
        element: <Maps />,
      },
    ],
  },
]);

function App() {
  return (
    <MantineProvider theme={DEFAULT_THEME} withNormalizeCSS withGlobalStyles>
      <HeaderMegaMenu />
      <div className="flex h-[100vh] overflow-hidden">
        <NavbarSearch />
        <div className="overflow-y-auto w-full">
          <Outlet />
        </div>
      </div>
    </MantineProvider>
  );
}

function TaskManagementAdmin() {
  const Funding = [
    { label: "Resources", count: "76,548", part: 38.72, color: "#47d6ab" },
    { label: "Man Power", count: "98,000", part: 49.57, color: "#03141a" },
    { label: "miscellaneous", count: "23,118", part: 11.69, color: "#4fcdf7" },
  ];

  const Employee = [
    { label: "Electrician", count: "204", part: 4.49, color: "#47d6ab" },
    { label: "Construction", count: "121", part: 2.66, color: "#03141a" },
    { label: "Mantainance", count: "1,118", part: 24.61, color: "#4fcdf7" },
    { label: "Janitorial", count: "3,100", part: 68.24, color: "#2fc9f7" },
  ];
  const chartData = [
    { date: "Jan 22", FuelUsage: 2890, MaintenanceCost: 2338 },
    { date: "Feb 22", FuelUsage: 2756, MaintenanceCost: 2103 },
    // ...other months
  ];
  const workOrderData = [
    { date: "Jan 22", Completed: 40, Pending: 20 },
    { date: "Feb 22", Completed: 35, Pending: 25 },
    { date: "Mar 22", Completed: 45, Pending: 15 },
    { date: "Apr 22", Completed: 50, Pending: 10 },
    { date: "May 22", Completed: 55, Pending: 5 },
    { date: "Jun 22", Completed: 60, Pending: 0 },
    { date: "Jul 22", Completed: 50, Pending: 10 },
    { date: "Aug 22", Completed: 45, Pending: 15 },
    { date: "Sep 22", Completed: 40, Pending: 20 },
    { date: "Oct 22", Completed: 55, Pending: 5 },
    { date: "Nov 22", Completed: 60, Pending: 0 },
    { date: "Dec 22", Completed: 65, Pending: 0 },
  ];
  const workOrderTotal = workOrderData.reduce(
    (sum, month) => sum + month.Completed + month.Pending,
    0
  );
  const workingHoursData = [
    { date: "Jan 22", Electrician: 150, Construction: 200, Maintenance: 100 },
    { date: "Feb 22", Electrician: 160, Construction: 210, Maintenance: 110 },
    { date: "Mar 22", Electrician: 170, Construction: 220, Maintenance: 120 },
    { date: "Apr 22", Electrician: 180, Construction: 230, Maintenance: 130 },
    { date: "May 22", Electrician: 190, Construction: 240, Maintenance: 140 },
    { date: "Jun 22", Electrician: 200, Construction: 250, Maintenance: 150 },
    { date: "Jul 22", Electrician: 210, Construction: 260, Maintenance: 160 },
    { date: "Aug 22", Electrician: 220, Construction: 270, Maintenance: 170 },
    { date: "Sep 22", Electrician: 230, Construction: 280, Maintenance: 180 },
    { date: "Oct 22", Electrician: 240, Construction: 290, Maintenance: 190 },
    { date: "Nov 22", Electrician: 250, Construction: 300, Maintenance: 200 },
    { date: "Dec 22", Electrician: 260, Construction: 310, Maintenance: 210 },
  ];
  const workingHoursTotal = workingHoursData.reduce(
    (sum, month) =>
      sum + month.Electrician + month.Construction + month.Maintenance,
    0
  );
  const fuelConsumptionData = [
    { date: "Jan 22", Vehicles: 500, Machinery: 300 },
    { date: "Feb 22", Vehicles: 520, Machinery: 320 },
    { date: "Mar 22", Vehicles: 540, Machinery: 340 },
    { date: "Apr 22", Vehicles: 560, Machinery: 360 },
    { date: "May 22", Vehicles: 580, Machinery: 380 },
    { date: "Jun 22", Vehicles: 600, Machinery: 400 },
    { date: "Jul 22", Vehicles: 620, Machinery: 420 },
    { date: "Aug 22", Vehicles: 640, Machinery: 440 },
    { date: "Sep 22", Vehicles: 660, Machinery: 460 },
    { date: "Oct 22", Vehicles: 680, Machinery: 480 },
    { date: "Nov 22", Vehicles: 700, Machinery: 500 },
    { date: "Dec 22", Vehicles: 720, Machinery: 520 },
  ];

  const fuelConsumptionTotal = fuelConsumptionData.reduce(
    (sum, month) => sum + month.Vehicles + month.Machinery,
    0
  );

  return (
    <div className="flex flex-wrap w-full p-2">
      <div className="p-2 max-w-[1100px] flex flex-col gap-20 overflow-x-hidden mx-auto">
        <div className="w-[]">
          <TableSort />
        </div>
        <div className="flex flex-wrap justify-between gap-20">
          <StatsSegments title={"Expense report"} data={Funding} />
          <StatsSegments title={"Employee report"} data={Employee} />
        </div>
        <div className="flex flex-wrap">
          <AreaChartHero
            title="Monthly Resource Usage"
            total={34567}
            chartData={chartData}
            categories={["FuelUsage", "MaintenanceCost"]}
            colors={["indigo", "cyan"]}
          />
          <AreaChartHero
            title="Work Order Completion"
            total={workOrderTotal}
            chartData={workOrderData}
            categories={["Completed", "Pending"]}
            colors={["green", "red"]}
          />
          <AreaChartHero
            title="Employee Working Hours"
            total={workingHoursTotal}
            chartData={workingHoursData}
            categories={["Electrician", "Construction", "Maintenance"]}
            colors={["blue", "orange", "purple"]}
          />
          <AreaChartHero
            title="Fuel Consumption"
            total={fuelConsumptionTotal}
            chartData={fuelConsumptionData}
            categories={["Vehicles", "Machinery"]}
            colors={["red", "yellow"]}
          />
        </div>
      </div>
    </div>
  );
}

function TaskManagementManager() {
  return (
    <div className="">
      <div className="flex flex-col gap-2 max-w-[800px] mx-auto ">
        <StatsRingCard />
        <TaskCardList />
      </div>
    </div>
  );
}

const users = [
  {
    id: 1,
    name: "Harriette Spoonlicker",
    email: "hspoonlicker@outlook.com",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",
  },
  {
    id: 2,
    name: "Harriette Spoonlicker",
    email: "hspoonlicker@outlook.com",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",
  },
  {
    id: 3,
    name: "Harriette Spoonlicker",
    email: "hspoonlicker@outlook.com",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",
  },
  // Add more user objects here as needed
];

function TaskManagementWorkshop() {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };
  return (
    <div>
      <WorkshopBanner />
      <DummyKanban />
      <div className="user-buttons flex gap-2 w-full">
        <div className="w-1/3">
          {users.map((user) => (
            <UserButton
              key={user.id}
              user={user}
              onClick={() => handleUserClick(user)}
            />
          ))}
        </div>
        <div className="user-details">
          {selectedUser && <UserDetails user={selectedUser} />}
        </div>
      </div>
    </div>
  );
}

export default router;

function AdminForms() {
  const formik = useFormik({
    initialValues: {
      emp_id: "",
      emp_name: "",
      role: "",
      total_workedhours: 0,
      joining_date: "",
    },
    onSubmit: (values) => {
      localStorage.setItem("employee", JSON.stringify(values));
    },
  });

  return (
    <div className="mx-auto max-w-xl">
      <form className="space-y-5" onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-6">
            <label
              htmlFor="emp_id"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Employee ID
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.emp_id}
              type="text"
              id="emp_id"
              name="emp_id"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="Enter employee ID"
            />
          </div>
          <div className="col-span-6">
            <label
              htmlFor="emp_name"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Employee Name
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.emp_name}
              name="emp_name"
              type="text"
              id="emp_name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="Enter employee name"
            />
          </div>
          <div className="col-span-6">
            <label
              htmlFor="role"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Role
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.role}
              name="role"
              type="text"
              id="role"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="Enter role"
            />
          </div>
          <div className="col-span-6">
            <label
              htmlFor="total_workedhours"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Total Worked Hours
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.total_workedhours}
              name="total_workedhours"
              type="number"
              id="total_workedhours"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="Enter total worked hours"
            />
          </div>
          <div className="col-span-6">
            <label
              htmlFor="joining_date"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Workshop Date
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.joining_date}
              name="joining_date"
              type="date"
              id="joining_date"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
            />
          </div>
          <div className="col-span-12">
            <button
              type="submit"
              className="bg-blue-500 rounded-lg border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

// dummy kanban
import { FiPlus, FiTrash } from "react-icons/fi";
import { motion } from "framer-motion";
import { FaFire } from "react-icons/fa";
import { UserButton, UserDetails } from "./components/mantine/UserButton";
import { TableSort } from "./components/mantine/TableSort";
import { AreaChartHero } from "./components/admin/AreaChartHero";
import { NavbarSearch } from "./components/mantine/NavbarSearch";
import { TableSelection } from "./components/mantine/TableSelection";
import { Equipment, Pendings, Profits, Scheduling } from "./assets/data";
import Maps from "./components/user/Maps";

export const DummyKanban = () => {
  return (
    <div className="h-screen w-full bg-neutral-900 text-neutral-50">
      <Board />
    </div>
  );
};

const Board = () => {
  const [cards, setCards] = useState(DEFAULT_CARDS);

  return (
    <div className="flex h-full w-full gap-3 overflow-scroll p-12">
      <Column
        title="Backlog"
        column="backlog"
        headingColor="text-neutral-500"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="TODO"
        column="todo"
        headingColor="text-yellow-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="In progress"
        column="doing"
        headingColor="text-blue-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Complete"
        column="done"
        headingColor="text-emerald-200"
        cards={cards}
        setCards={setCards}
      />
      <BurnBarrel setCards={setCards} />
    </div>
  );
};

const Column = ({ title, headingColor, cards, column, setCards }) => {
  const [active, setActive] = useState(false);

  const handleDragStart = (e, card) => {
    e.dataTransfer.setData("cardId", card.id);
  };

  const handleDragEnd = (e) => {
    const cardId = e.dataTransfer.getData("cardId");

    setActive(false);
    clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element.dataset.before || "-1";

    if (before !== cardId) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;
      cardToTransfer = { ...cardToTransfer, column };

      copy = copy.filter((c) => c.id !== cardId);

      const moveToBack = before === "-1";

      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      setCards(copy);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    highlightIndicator(e);

    setActive(true);
  };

  const clearHighlights = (els) => {
    const indicators = els || getIndicators();

    indicators.forEach((i) => {
      i.style.opacity = "0";
    });
  };

  const highlightIndicator = (e) => {
    const indicators = getIndicators();

    clearHighlights(indicators);

    const el = getNearestIndicator(e, indicators);

    el.element.style.opacity = "1";
  };

  const getNearestIndicator = (e, indicators) => {
    const DISTANCE_OFFSET = 50;

    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();

        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );

    return el;
  };

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
  };

  const handleDragLeave = () => {
    clearHighlights();
    setActive(false);
  };

  const filteredCards = cards.filter((c) => c.column === column);

  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">
          {filteredCards.length}
        </span>
      </div>
      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`h-full w-full transition-colors ${
          active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}
      >
        {filteredCards.map((c) => {
          return <Card key={c.id} {...c} handleDragStart={handleDragStart} />;
        })}
        <DropIndicator beforeId={null} column={column} />
        <AddCard column={column} setCards={setCards} />
      </div>
    </div>
  );
};

const Card = ({ title, id, column, handleDragStart }) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
        className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
      >
        <p className="text-sm text-neutral-100">{title}</p>
      </motion.div>
    </>
  );
};

const DropIndicator = ({ beforeId, column }) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
    />
  );
};

const BurnBarrel = ({ setCards }) => {
  const [active, setActive] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  const handleDragEnd = (e) => {
    const cardId = e.dataTransfer.getData("cardId");

    setCards((pv) => pv.filter((c) => c.id !== cardId));

    setActive(false);
  };

  return (
    <div
      onDrop={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${
        active
          ? "border-red-800 bg-red-800/20 text-red-500"
          : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
      }`}
    >
      {active ? <FaFire className="animate-bounce" /> : <FiTrash />}
    </div>
  );
};

const AddCard = ({ column, setCards }) => {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim().length) return;

    const newCard = {
      column,
      title: text.trim(),
      id: Math.random().toString(),
    };

    setCards((pv) => [...pv, newCard]);

    setAdding(false);
  };

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <textarea
            onChange={(e) => setText(e.target.value)}
            autoFocus
            placeholder="Add new task..."
            className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0"
          />
          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <button
              onClick={() => setAdding(false)}
              className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
            >
              Close
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
            >
              <span>Add</span>
              <FiPlus />
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
        >
          <span>Add card</span>
          <FiPlus />
        </motion.button>
      )}
    </>
  );
};

const DEFAULT_CARDS = [
  // BACKLOG
  { title: "Investigate cause of outage", id: "1", column: "backlog" },
  { title: "Coordinate with field technicians", id: "2", column: "backlog" },
  { title: "Notify residents about outage", id: "3", column: "backlog" },
  // TODO
  { title: "Dispatch repair team to site", id: "4", column: "todo" },
  { title: "Ensure safety measures are in place", id: "5", column: "todo" },
  { title: "Update status on public portal", id: "6", column: "todo" },
  // DOING
  { title: "Repair damaged lines", id: "7", column: "doing" },
  { title: "Monitor system for further issues", id: "8", column: "doing" },
  // DONE
  { title: "Restore power to affected areas", id: "9", column: "done" },
  {
    title: "Send confirmation of resolution to residents",
    id: "10",
    column: "done",
  },
];

export { DEFAULT_CARDS };
