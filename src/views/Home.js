import React, { Component, Fragment } from 'react'
import { Button } from 'antd'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Fragment>
                我是首页
                <Button type="primary">按钮</Button>
            </Fragment>
        )
    }
}

export default Home