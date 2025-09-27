import React from 'react';
import cardCalander from "../../assets/ri_calendar-line.png"





const TicketCard = ({ onAddTask, tickets}) => {


    return (
        tickets.map(ticket => 

                    <div 
                    key={ticket.id}
                    onClick={() => {
                        onAddTask (ticket)
                    }}
                    className="card bg-white text-black col-span-12 md:col-span-6">
                        <div className="card-body">
                            <div className='flex justify-between items-center'>
                                <h2 className="title card-title text-lg">{ticket.title}</h2>
                                <div className={`card-status badge   border-none ${ticket.status === "Open"? "badge-soft badge-success bg-green-100": ticket.status === "In Progress"? " badge-soft badge-warning bg-yellow-100": ticket.status === "Pending"? "badge-soft badge-error bg-red-100": "badge-soft badge-success" }`}> <span className={`card-status-circle  w-4 h-4 rounded-full ${ticket.status === "Open"? "bg-success": ticket.status === "In Progress"? " bg-warning": ticket.status === "Pending"? "bg-error": "bg-success" }`}></span>{ticket.status}</div>
                            </div>
                            <p className='description text-sm'>{ticket.description}</p>
                            
                            <div className=" text-[12px] md:text-[9px] lg:text-sm flex justify-between items-center">
                            <div className='flex gap-2 items-center text-[#F83044]'>
                                <span className=' text-[#627382]'>#<span className='card-id'>{ticket.id}</span></span>
                                <span className={`card-priority uppercase ${ticket.priority === "High"? "text-error": ticket.priority === "Medium"? "text-warning": ticket.priority === "Low"? "text-success": ""}`}>{ticket.priority}</span>
                            </div>
                            <div className='flex gap-2 items-center' >
                                <span className='customer text-[#627382]'>{ticket.customer}</span>
                                <div className='flex justify-between items-center gap-1 text-[#627382]'><span><img className='w-4' src={cardCalander} alt="Card Calander" /></span><span className='createdAt'>{ticket.createdAt}</span></div>
                            </div>

                            </div>
                        </div>
                    </div>



        )           
    );
};

export default TicketCard;