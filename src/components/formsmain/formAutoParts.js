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

function FormAutoPartsMain() {
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
                            name="Product Name"
                            label="Product Name"
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
                            name="Condition:"
                            label="Condition:"
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

                        <Form.Item
                            name="Engine Model:"
                            label="Engine Model:"
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
                            name="Part No:"
                            label="Part No:"
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
                            name="Chassis No/ Win No:"
                            label="Chassis No/ Win No:"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="Additional"
                            label="Additional"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input.TextArea />
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

export default FormAutoPartsMain;