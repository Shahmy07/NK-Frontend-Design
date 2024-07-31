import { Col, Row } from 'react-bootstrap';
import { Button, Form, Input, Select, Space, DatePicker, message, Upload, Checkbox } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import FormSellingTypeMain from './formSellingType';
 
const { Option } = Select;
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
}; 

const props = {
    name: 'file',
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

function FormVehicleMain() {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log(values);
    };
    const onReset = () => {
        form.resetFields();
    };
    return (
        <section>
            <Form
                {...layout}
                form={form}
                name="control-hooks"
                className='py-5'
                onFinish={onFinish}
                style={{
                    maxWidth: '100%',
                }}
            >

                <Row  >
                    <Col lg="6" className='mt-2'>

                        <Form.Item
                            name="make"
                            label="Make"
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
                                <Option value="maaale">male</Option>
                                <Option value="femaaale">female</Option>
                                <Option value="otheaar">other</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="Model"
                            label="Model"
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
                                <Option value="maaale">male</Option>
                                <Option value="femaaale">female</Option>
                                <Option value="otheaar">other</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="Model Code:"
                            label="Model Code:"
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
                                <Option value="maaale">male</Option>
                                <Option value="femaaale">female</Option>
                                <Option value="otheaar">other</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="Location / Prefecture:"
                            label="Location / Prefecture:"
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
                                <Option value="maaale">male</Option>
                                <Option value="femaaale">female</Option>
                                <Option value="otheaar">other</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="Type"
                            label="Type"
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
                                <Option value="maaale">male</Option>
                                <Option value="femaaale">female</Option>
                                <Option value="otheaar">other</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="Sub Type:"
                            label="Sub Type:"
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
                                <Option value="maaale">male</Option>
                                <Option value="femaaale">female</Option>
                                <Option value="otheaar">other</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="Grade"
                            label="Grade"
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
                                <Option value="maaale">male</Option>
                                <Option value="femaaale">female</Option>
                                <Option value="otheaar">other</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="Chassis No"
                            label="Chassis No"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item label="Year Of MFD" style={{ marginBottom: 0 }}>
                            <Form.Item
                                name="year"
                                rules={[{ required: true }]}
                                style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                            >
                                <Select
                                    placeholder="Select a option and change input text above"
                                    allowClear
                                >
                                    <Option value="maaale">male</Option>
                                    <Option value="femaaale">female</Option>
                                    <Option value="otheaar">other</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name="month"
                                rules={[{ required: true }]}
                                style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                            >
                                <Select
                                    placeholder="Select a option and change input text above"
                                    allowClear
                                >
                                    <Option value="maaale">male</Option>
                                    <Option value="femaaale">female</Option>
                                    <Option value="otheaar">other</Option>
                                </Select>
                            </Form.Item>
                        </Form.Item>

                        <Form.Item label="Year Of REG" style={{ marginBottom: 0 }}>
                            <Form.Item
                                name="year"
                                rules={[{ required: true }]}
                                style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                            >
                                <Select
                                    placeholder="Select a option and change input text above"
                                    allowClear
                                >
                                    <Option value="maaale">male</Option>
                                    <Option value="femaaale">female</Option>
                                    <Option value="otheaar">other</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name="month"
                                rules={[{ required: true }]}
                                style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                            >
                                <Select
                                    placeholder="Select a option and change input text above"
                                    allowClear
                                >
                                    <Option value="maaale">male</Option>
                                    <Option value="femaaale">female</Option>
                                    <Option value="otheaar">other</Option>
                                </Select>
                            </Form.Item>
                        </Form.Item>

                        <Form.Item
                            name="Engine CC"
                            label="Engine CC"
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
                                <Option value="maaale">male</Option>
                                <Option value="femaaale">female</Option>
                                <Option value="otheaar">other</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="Millage"
                            label="Millage"
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
                                <Option value="maaale">male</Option>
                                <Option value="femaaale">female</Option>
                                <Option value="otheaar">other</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="Fuel"
                            label="Fuel"
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
                                <Option value="maaale">male</Option>
                                <Option value="femaaale">female</Option>
                                <Option value="otheaar">other</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="Color"
                            label="Color"
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
                                <Option value="maaale">male</Option>
                                <Option value="femaaale">female</Option>
                                <Option value="otheaar">other</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="Transmission"
                            label="Transmission"
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
                                <Option value="maaale">male</Option>
                                <Option value="femaaale">female</Option>
                                <Option value="otheaar">other</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="Drive"
                            label="Drive"
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
                                <Option value="maaale">male</Option>
                                <Option value="femaaale">female</Option>
                                <Option value="otheaar">other</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="Wheel Drive"
                            label="Wheel Drive"
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
                                <Option value="maaale">male</Option>
                                <Option value="femaaale">female</Option>
                                <Option value="otheaar">other</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="Seat"
                            label="Seat"
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
                                <Option value="maaale">male</Option>
                                <Option value="femaaale">female</Option>
                                <Option value="otheaar">other</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="Door"
                            label="Door"
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
                                <Option value="maaale">male</Option>
                                <Option value="femaaale">female</Option>
                                <Option value="otheaar">other</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="Dimensions"
                            label="Dimensions"
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
                                <Option value="maaale">male</Option>
                                <Option value="femaaale">female</Option>
                                <Option value="otheaar">other</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="Weight"
                            label="Weight"
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
                                <Option value="maaale">male</Option>
                                <Option value="femaaale">female</Option>
                                <Option value="otheaar">other</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="Version/class"
                            label="Version/class"
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
                                <Option value="maaale">male</Option>
                                <Option value="femaaale">female</Option>
                                <Option value="otheaar">other</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="M3"
                            label="M3"
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
                                <Option value="maaale">male</Option>
                                <Option value="femaaale">female</Option>
                                <Option value="otheaar">other</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="Exterior Grade"
                            label="Exterior Grade"
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
                                <Option value="maaale">male</Option>
                                <Option value="femaaale">female</Option>
                                <Option value="otheaar">other</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="Interior Grade"
                            label="Interior Grade"
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
                                <Option value="maaale">male</Option>
                                <Option value="femaaale">female</Option>
                                <Option value="otheaar">other</Option>
                            </Select>
                        </Form.Item>

                        {/* logical filed */}
                        <FormSellingTypeMain />
                        {/* END logical filed */}

                    </Col>
                    <Col lg="6" className='mt-2'>
                        <Row className='border border-3 border-primary-subtle rounded pb-5 pt-3 mx-0'>
                            <Col xl="4" xs="6" className='mt-4 text-center'>
                                <Upload {...props}>
                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                </Upload>
                            </Col>
                            <Col xl="4" xs="6" className='mt-4 text-center'>
                                <Upload {...props}>
                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                </Upload>
                            </Col>
                            <Col xl="4" xs="6" className='mt-4 text-center'>
                                <Upload {...props}>
                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                </Upload>
                            </Col>
                            <Col xl="4" xs="6" className='mt-4 text-center'>
                                <Upload {...props}>
                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                </Upload>
                            </Col>
                            <Col xl="4" xs="6" className='mt-4 text-center'>
                                <Upload {...props}>
                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                </Upload>
                            </Col>
                            <Col xl="4" xs="6" className='mt-4 text-center'>
                                <Upload {...props}>
                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                </Upload>
                            </Col>
                        </Row>

                        <Row className='border border-3 mt-4 border-primary-subtle rounded pb-5 pt-3 mx-0'>
                            <Col md="6" xs="6" className='mt-4'>
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    className='m-0'
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    className='m-0'
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    className='m-0'
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    className='m-0'
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    className='m-0'
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    className='m-0'
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    className='m-0'
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    className='m-0'
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    className='m-0'
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    className='m-0'
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    className='m-0'
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    className='m-0'
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    className='m-0'
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    className='m-0'
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                            </Col>
                            <Col md="6" xs="6" className='mt-4'>
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    className='m-0'
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    className='m-0'
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    className='m-0'
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    className='m-0'
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    className='m-0'
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    className='m-0'
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    className='m-0'
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    className='m-0'
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    className='m-0'
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    className='m-0'
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    className='m-0'
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    className='m-0'
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    className='m-0'
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    className='m-0'
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Form.Item className='mt-4 ps-lg-5 formMinButtons'>
                    <Space className='d-flex justify-content-end'>
                        <Button className='bgNKred' type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button htmlType="button" onClick={onReset}>
                            Reset
                        </Button>
                    </Space>
                </Form.Item>

            </Form>
        </section >
    );
}

export default FormVehicleMain;