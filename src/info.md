 axios.post('http://localhost:2200/api/places', place,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }
        ).then((res) => {
            let places = this.state.places
            places.push(res.data)
            console.log(res.data)
            this.setState({ places })
        }).catch((err) => {
            console.log('error>>>>>>', err)
        })