import React from 'react';
import { useState } from 'react';
import { Button, Modal, Form, Input, Popover } from 'antd';
// import 'antd/dist/reset.css';
import right_arrow from '../../assets/right-arrow.png'
import '../../style/ButtonDownload.css'

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
    },
};

const ButtonDownload = () => {

    const [open, setOpen] = useState(false);
  
    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };

    const onFinish = (values) => {
        console.log(values);
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div style={{ marginTop: "5px" }}>
            <Button style={{
                color: "white",
                borderRadius: "5px",
                padding: "5px 20px",
                fontWeight: "bold",
                border: "none",
                backgroundImage: "linear-gradient(to right, #2BAF49, #EE6B2A)",
                textTransform: "uppercase",
                fontSize: ".775rem"
            }} onClick={showModal}>
                download report <img style={{ width: "15px", marginLeft: "4px" }} src={right_arrow} alt="" />
            </Button>
            <Modal
                title="Enter your email address to receive report"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
                closable={null}
            >
                <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                    <Form.Item name={['user', 'email']}
                        rules={[
                            {
                                type: 'email',
                            },
                        ]}
                    >
                        <Input style={{ width: "280px", marginTop: "20px", marginRight: "auto", marginLeft: "auto" }} />
                    </Form.Item>

                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>

                        <Popover placement='rightTop'
                            
                            title="Success"
                            trigger="click"
                            content=""
                            open={open}
                            onOpenChange={handleOpenChange}
                        >

                            <Button className="btn-submit" htmlType="submit">Submit</Button>
                        </Popover>
                    </Form.Item>
                </Form>
            </Modal>
        </div >
    );
};

export default ButtonDownload;