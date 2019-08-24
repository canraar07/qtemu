import React from 'react';
import Axios from 'axios';

const HOCFetchData = WrappedComponent => {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                dataFetch: []
            };
        }

        componentDidMount() {
            const { location:{pathname} } = this.props
            this.fetchData(pathname)
        }

        componentWillReceiveProps(nextProps){
            const { location:{pathname} } = nextProps
            this.fetchData(pathname)
        }

        fetchData(url) {
            console.log('ini url : ', url)
            Axios.get(`https://5d60ae26c2ca490014b27090.mockapi.io/api/v1/${url}`
            ).then(
                ({ data: dataUser }) => {
                    this.setState({
                        dataFetch: dataUser
                    })
                })
        }

        render(){
            console.log("props",this.props)
            return (
                <WrappedComponent dataFetch = {this.state.dataFetch}>
                    {this.props.children}
                </WrappedComponent>
            )
        }

    }
};

export default HOCFetchData;