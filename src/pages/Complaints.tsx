import ContactText from '../components/Complaint/ContactText';
import Form from '../components/Complaint/Form';

const Complaints = () => {
    return (
        <div className='bg-[url("/images/map1.png")] bg-no-repeat bg-cover'>
            <div className='py-5'>
                <div className='container'>
                    <div className='flex flex-col lg:flex-row justify-between gap-3 p-3 rounded-3xl bg-white'>
                        <ContactText />
                        <Form/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Complaints
