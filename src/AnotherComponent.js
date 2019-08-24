

import React from 'react';
import { Tabs, Row, Col } from 'antd';

import { withRouter } from 'react-router-dom';

const { TabPane } = Tabs;


class AnotherComponent extends React.Component {

    componentDidMount() {
    }

    handleChangeTab = (key) => {
        const { history } = this.props
        history.push(`${key}`)
       // this.props.handlerFatchUser(key)
    }

    render() {
        const { mydata } = this.props
        return (
            <div>
                <Row>
                    <Col offset={8} md={8}>
                        <Tabs defaultActiveKey="1" onChange={this.handleChangeTab}>
                            <TabPane tab="Post" key="posts">
                                {mydata.map((v) => {
                                    return (
                                        <li>{v.posts}</li>
                                    )
                                })}
                            </TabPane>
                            <TabPane tab="User" key="users">
                                {mydata.map((v) => {
                                    return (
                                        <li>{v.name}</li>
                                    )
                                })}
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default withRouter(AnotherComponent);