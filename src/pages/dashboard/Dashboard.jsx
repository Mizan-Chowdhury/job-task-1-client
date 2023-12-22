import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import useAuthContext from "../../hooks/useAuthContext";
import useTasks from "../../hooks/useTasks";
import TodosTask from "./todosTask";
import { useDrop } from "react-dnd";

const Dashboard = () => {
  const [todos, setTodos] = useState([]);
  const [ongoing, setOngoing] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [tasks, refetch] = useTasks();

  useEffect(() => {
    const fTodos = tasks?.filter((task) => task.status === "Todo");
    const fOngoing = tasks?.filter((task) => task.status === "Ongoing");
    const fCompleted = tasks?.filter((task) => task.status === "Completed");
    setTodos(fTodos);
    setOngoing(fOngoing);
    setCompleted(fCompleted);
  }, [tasks]);
  console.log(completed);


  const statuses = ["Todo", "Ongoing", "Completed"];

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar refetch={refetch}></Navbar>
      <div className="md:grid grid-cols-3">
        {statuses.map((status, index) => (
          <Section
            key={index}
            status={status}
            todos={todos}
            ongoing={ongoing}
            completed={completed}
          ></Section>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

const Section = ({ status, todos, ongoing, completed }) => {
  const axiosPublic = useAxios();
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "tasks",
    drop: (item)=> addTaskToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  let text = "To-do";
  let bg = "#DBCC95";
  let taskToMap = todos;

  if (status === "Ongoing") {
    text = "Ongoing";
    bg = "#C3E2C2";
    taskToMap = ongoing;
  }

  if (status === "Completed") {
    text = "Completed";
    bg = "#CD8D7A";
    taskToMap = completed;
  }

  const addTaskToSection = (id)=>{
    console.log('droper', id, status);
    axiosPublic.patch('/todo', {status})
    .then(res=> console.log(res.data));
  }

  return (
    <div ref={drop} className="">
      <Header status={text} bg={bg} count={taskToMap?.length}></Header>
      <div>
        {taskToMap &&
          taskToMap.map((task, index) => (
            <div className="p-4" key={index}>
              <TodosTask task={task}></TodosTask>
            </div>
          ))}
      </div>
    </div>
  );
};

const Header = ({ status, bg, count }) => {
  return (
    <div className={`bg-[${bg}] flex items-center`}>
      <h1 className={`p-2 font-semibold`}>{status}</h1>
      <p>{count}</p>
    </div>
  );
};
