
import { Form, Input, Select, DatePicker, } from 'antd';

const { RangePicker } = DatePicker;
const { Option } = Select;

const rangeConfig = {
    rules: [
        {
            type: 'array',
            required: true,
            message: 'Please select time!',
        },
    ],
};

const config = {
    rules: [
        {
            type: 'array',
            required: true,
            message: 'Please select time!',
        },
    ],
};

const onFinish = (fieldsValue) => {
    // Should format date value before submit.
    const rangeValue = fieldsValue['range-picker'];
    const rangeTimeValue = fieldsValue['range-time-picker'];
    const values = {
        ...fieldsValue,
        'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
        'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
        'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
        'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
        'range-time-picker': [
            rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
            rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
        ],
        'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
    };
    console.log('Received values of form: ', values);
};

function FormSellingTypeMain() { 
    return (
        <section>
            {/* logical filed */}
            <Form.Item
                name="sellingtype"
                label="Selling Type"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Select
                    placeholder="Select a option and change input text above"
                    allowClear
                >
                    <Option value="consultation">Consultation</Option>
                    <Option value="export">Export</Option>
                    <Option value="auctionbynK">Auction By NK</Option>
                    <Option value="tenderauction">Tender Auction</Option>
                    <Option value="auctionhall">Auction Hall</Option>
                    <Option value="fixedprice">Fixed Price</Option>
                </Select>
            </Form.Item>

            <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.sellingtype !== currentValues.sellingtype}
            >
                {({ getFieldValue }) =>
                    getFieldValue('sellingtype') === 'auctionbynK' ? (
                        <Form.Item
                            name="expectedprice"
                            label="Expected Price:"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    ) : null
                }
            </Form.Item>

            <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.sellingtype !== currentValues.sellingtype}
            >
                {({ getFieldValue }) =>
                    getFieldValue('sellingtype') === 'tenderauction' ? (
                        <>
                            <Form.Item
                                name="expectedpriceta"
                                label="Expected Price"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item name="range-picker" label="Auction Period" {...rangeConfig}>
                                <RangePicker />
                            </Form.Item>
                        </>

                    ) : null
                }
            </Form.Item>

            <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.sellingtype !== currentValues.sellingtype}
            >
                {({ getFieldValue }) =>
                    getFieldValue('sellingtype') === 'auctionhall' ? (
                        <>
                            <Form.Item
                                name="auctionhallnames"
                                label="Auction Hall"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Select
                                    placeholder="Select a option and change input text above"
                                    allowClear
                                >
                                    <Option value="qqq">dsd</Option>
                                    <Option value="www">asa</Option>
                                    <Option value="eee">sfaf</Option>
                                    <Option value="rrrr">fsafa</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item name="date-picker" label="Auction Date:" {...config}>
                                <DatePicker />
                            </Form.Item>

                            <Form.Item
                                name="buyotoption"
                                label="Buy Out Option"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Select
                                    placeholder="Select a option and change input text above"
                                    allowClear
                                >
                                    <Option value="consultation">Yes</Option>
                                    <Option value="export">No</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name="referencenumber"
                                label="Reference Number"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </>
                    ) : null
                }
            </Form.Item>

            <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.sellingtype !== currentValues.sellingtype}
            >
                {({ getFieldValue }) =>
                    getFieldValue('sellingtype') === 'fixedprice' ? (
                        <Form.Item
                            name="fixedprice"
                            label="Fixed Price"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    ) : null
                }
            </Form.Item>
            {/* END logical filed */}
        </section >
    );
}

export default FormSellingTypeMain;