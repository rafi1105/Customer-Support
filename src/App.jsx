
// import { useState } from 'react'
import { useState, useEffect} from 'react'

import './App.css'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import MainSection from './components/mainSection/MainSection'
import Navbar from './components/navbar/Navbar'
import { ToastContainer, toast } from 'react-toastify';




const fetchTicket = async () => {
  const res = await fetch("/customerTicketsData.json");
  return res.json()
}



function App() {


  const [tickets, setTickets] = useState([]); // All available tickets
    // console.log(tickets)
  const [tasks, setTasks] = useState([]);     // Selected tasks
  const [resolvedTasks, setResolvedTasks] = useState([]); 


  useEffect(() => {
    fetchTicket().then((data) => setTickets(data));
  }, []);


  // function to add task
  const onAddTask = (ticket) => {
    setTasks((prev) => [...prev, ticket]);
    toast(`Added "${ticket.title}" to Task Status!!`);
    setTickets((prev) => prev.filter((t) => t.id !== ticket.id));

  };
  // Complete task (remove from tickets + tasks)
  const onCompleteTask = (completedTask) => {
    setTasks((prev) => prev.filter((t) => t.id !== completedTask.id));
    // setTickets((prev) => prev.filter((t) => t.id !== completedTask.id));
     setResolvedTasks((prev) => [...prev, completedTask]); // add to resolved
    toast.success(`Completed "${completedTask.title}"👏!`);
    // console.log(completedTask)
  };


  return (
    <>
      <header>
        <nav className='shadow-sm'>
            <Navbar></Navbar>
        </nav>

          <section className='bg-[#F5F5F5]'>
          <Hero tasks={tasks} resolvedTasks={resolvedTasks}></Hero>
          </section>
      </header>

      <main className='bg-[#F5F5F5]'>
          <MainSection resolvedTasks={resolvedTasks} tickets={tickets} onCompleteTask={onCompleteTask} tasks={tasks} onAddTask={onAddTask} ></MainSection>
      </main>
          <Footer></Footer>
          
          <ToastContainer />

    </>
  )
}

export default App
