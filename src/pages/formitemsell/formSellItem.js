import './formSellItem.css';
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FormVehicleMain from '../../components/formsmain/formVehicle';
import FormEquipmentMain from '../../components/formsmain/formEquipment';
import FormAutoPartsMain from '../../components/formsmain/formAutoParts';


function FormSellItem() {
    return (
        <section>
            <div className='bgNKred py-3 px-lg-4'>
                <Container fluid>
                    <h4 className='fontsize22px text-white'>Selling Form</h4>
                </Container>
            </div>

            <div className='formItemGen py-3 px-lg-4'>
                <Container fluid>
                    <Tabs
                        defaultActiveKey="vehicle"
                        id="justify-tab-example"
                        className="mb-3"
                        justify
                    >
                        <Tab eventKey="vehicle" title="VEHICLE">

                            <FormVehicleMain />

                        </Tab>
                        <Tab eventKey="equipment" title="EQUIPMENT">
                            <FormEquipmentMain />
                        </Tab>
                        <Tab eventKey="autoparts" title="AUTO PARTS">
                            <FormAutoPartsMain />
                        </Tab>
                    </Tabs>
                </Container>
            </div>
        </section >
    );
}

export default FormSellItem;