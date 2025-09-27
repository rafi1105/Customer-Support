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
                    className="card bg-white text-black col-span-1 lg:col-span-6 cursor-pointer hover:shadow-lg transition-shadow duration-200">
                        <div className="card-body p-4 sm:p-6">
                            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4'>
                                <h2 className="title card-title text-base sm:text-lg line-clamp-2">{ticket.title}</h2>
                                <div className={`card-status badge badge-sm sm:badge-md border-none flex-shrink-0 ${ticket.status === "Open"? "badge-soft badge-success bg-green-100": ticket.status === "In Progress"? " badge-soft badge-warning bg-yellow-100": ticket.status === "Pending"? "badge-soft badge-error bg-red-100": "badge-soft badge-success" }`}> 
                                    <span className={`card-status-circle w-2 h-2 sm:w-3 sm:h-3 rounded-full mr-1 ${ticket.status === "Open"? "bg-success": ticket.status === "In Progress"? " bg-warning": ticket.status === "Pending"? "bg-error": "bg-success" }`}></span>
                                    <span className="text-xs sm:text-sm">{ticket.status}</span>
                                </div>
                            </div>
                            <p className='description text-xs sm:text-sm text-gray-600 mt-2 line-clamp-3'>{ticket.description}</p>
                            
                            <div className="text-xs sm:text-sm flex flex-col sm:flex-row justify-between gap-2 sm:gap-4 mt-4">
                                <div className='flex gap-2 items-center'>
                                    <span className='text-[#627382]'>#<span className='card-id'>{ticket.id}</span></span>
                                    <span className={`card-priority uppercase font-medium ${ticket.priority === "High"? "text-error": ticket.priority === "Medium"? "text-warning": ticket.priority === "Low"? "text-success": ""}`}>{ticket.priority}</span>
                                </div>
                                <div className='flex flex-col sm:flex-row gap-1 sm:gap-2 items-start sm:items-center'>
                                    <span className='customer text-[#627382] truncate'>{ticket.customer}</span>
                                    <div className='flex items-center gap-1 text-[#627382]'>
                                        <img className='w-3 h-3 sm:w-4 sm:h-4' src={cardCalander} alt="Calendar" />
                                        <span className='createdAt text-xs'>{ticket.createdAt}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



        )           
    );
};

export default TicketCard;