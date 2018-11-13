import React from 'react';
import { Breadcrumb } from 'antd';
export function BreadcrumbNav(props) {
    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item> */}
            {props.Breadcrumb}
        </Breadcrumb>
    )
}