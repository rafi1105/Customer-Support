import React, { Suspense } from 'react';
import Container from '../container/Container';
import CustomerTickets from './CustomerTickets';
import TaskStatus from './TaskStatus';




const MainSection = ({ onAddTask, tasks, onCompleteTask, tickets, resolvedTasks }) => {




    return (
        <>
        <Container>
            <div className='grid gap-9 grid-cols-12 py-10 '>
            <Suspense fallback={<div  className='grid col-span-12 md:col-span-9 justify-center items-center'><span className="loading loading-spinner loading-xl"></span></div>}>
                <CustomerTickets tickets={tickets} onAddTask={onAddTask}></CustomerTickets>
            </Suspense>
            <TaskStatus resolvedTasks={resolvedTasks} onCompleteTask={onCompleteTask} tasks={tasks}></TaskStatus>
            </div>
        </Container>
        </>
    );
};

export default MainSection;