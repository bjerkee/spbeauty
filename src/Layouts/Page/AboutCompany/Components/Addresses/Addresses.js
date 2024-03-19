import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='border rounded col-6 p-4'>
        <div className='d-inline-flex flex-column gap-4 col-12'>
            <div className='title'>Адреса заведений</div>
        <div className='d-flex flex-column'>    
        <div className='d-inline-flex flex-column gap-2 pb-5 mb-5'>
        <div className='py-3'><ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement></div>
        <div className='py-3 pb'><ListElement>Санкт-Петербург, Казанская ул, 7</ListElement></div>
        </div>
        <div className='d-inline-flex mb-auto pt-5 mt-5'>
            <SecondaryButton>Добавить филиал</SecondaryButton></div>
        </div>
        </div>
        </div>
    );
}

export default Addresses;