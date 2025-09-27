
import TicketCard from './TicketCard';


const CustomerTickets = ({ onAddTask, tickets}) => {



    return (
        <div className='col-span-12 lg:col-span-9'>
            <h2 className='mb-3 font-semibold text-xl sm:text-2xl text-[#34485A]'>Customer Tickets</h2>
            <div id='customer-tickets-container-wraper'>
                <div id='customer-tickets-container' className="customer-tickets-card grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4">
                    {/* card */}
                    {
                    <TicketCard tickets={tickets} onAddTask={onAddTask} ></TicketCard>
                    }
                </div>
            </div>
        </div>
    );
};

export default CustomerTickets;