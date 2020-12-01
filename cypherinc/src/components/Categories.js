import React, { Component } from 'react'
import dummy from '../dummy/dummy.json'

class Categories extends Component {
    state = {
        data: null
    }

    componentDidMount() {
        fetch('https://reqres.in/api/users')
            .then(res => res.json())
            .then(data => {
                this.setState({ data })
            })
    }

    render() {
        const { data } = this.state
        const catList = {
                width: 'auto',
                marginRight: '10px'
            }
            // console.log(dummy)
        return ( <
            section > { /* =======================================Category List================================ */ } <
            div className = "black-bg" >
            <
            div className = "categories-name owl-carousel owl-theme owl-loaded owl-text-select-on" >
            <
            div className = "owl-stage-outer" >
            <
            div className = "owl-stage"
            style = {
                { transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: '621px' } } >
            <
            div className = "owl-item active"
            style = { catList } >
            <
            div className = "item" > < a href = "#"
            className = "active" > Alle < /a></div >
            <
            /div> <
            div className = "owl-item active"
            style = { catList } >
            <
            div className = "item" > < a href = "#" > Sport < /a></div >
            <
            /div> <
            div className = "owl-item active"
            style = { catList } >
            <
            div className = "item" > < a href = "#" > Musik < /a></div >
            <
            /div> <
            div className = "owl-item active"
            style = { catList } >
            <
            div className = "item" > < a href = "#" > Film og TV < /a></div >
            <
            /div> <
            div className = "owl-item active"
            style = { catList } >
            <
            div className = "item" > < a href = "#" > Sociale medier < /a></div >
            <
            /div> <
            div className = "owl-item active"
            style = { catList } >
            <
            div className = "item" > < a href = "#" > Debat < /a></div >
            <
            /div> <
            /div> <
            /div> <
            div className = "owl-controls" >
            <
            div className = "owl-nav" >
            <
            div className = "owl-prev"
            style = {
                { display: 'none' } } > prev < /div> <
            div className = "owl-next"
            style = {
                { display: 'none' } } > next < /div> <
            /div> <
            div className = "owl-dots" >
            <
            div className = "owl-dot active" > < span > < /span></div >
            <
            div className = "owl-dot" > < span > < /span></div >
            <
            div className = "owl-dot" > < span > < /span></div >
            <
            div className = "owl-dot" > < span > < /span></div >
            <
            div className = "owl-dot" > < span > < /span></div >
            <
            div className = "owl-dot" > < span > < /span></div >
            <
            /div> <
            /div> <
            /div> <
            /div>

            { /* =====================================Sports========================================== */ } <
            div className = "slider-box" > { /* <h2>Sport <a href="#">Vis alle</a></h2> */ } <
            h2 > { dummy[0].category_name } < /h2> <
            div className = "celebrity-slider owl-carousel owl-theme owl-loaded owl-text-select-on" >

            <
            div className = "owl-stage-outer" >
            <
            div className = "owl-stage"
            style = {
                { transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: '1582px', paddingLeft: '50px', paddingRight: '50px' } } >
            <
            ShowCategories / >
            <
            /div> <
            /div>

            <
            div className = "owl-controls" >
            <
            div className = "owl-nav" >
            <
            div className = "owl-prev"
            style = {
                { display: 'none' } } > prev < /div> <
            div className = "owl-next"
            style = {
                { display: 'none' } } > next < /div> <
            /div> <
            div className = "owl-dots" >
            <
            div className = "owl-dot active" > < span > < /span></div >
            <
            div className = "owl-dot" > < span > < /span></div >
            <
            /div> <
            /div> <
            /div> <
            /div> <
            /section>
        )
    }
}

class ShowCategories extends React.Component {
    render() {

        return (
            dummy.map((data, i) => {
                // console.log(i);
                // console.log('this in upper loop');
                // console.log(data, data.person, data.person[i].avatar);
                // console.log(i)
                // console.log(data)
                data.person.map((d, j) => {
                        console.log('This is inner loop');
                        console.log(`this is` + j)
                            // console.log(j)
                        console.log(d.avatar)
                            // console.log(d.first_name, d.last_name,  d.avatar)
                        return ( <
                            div className = "owl-item active"
                            style = {
                                { width: '227px', marginRight: '20px' } } >
                            <
                            div className = "item" >
                            <
                            div className = "celebrity_box" >
                            <
                            a href = "detail.html" >
                            <
                            img src = { d.avatar }
                            alt = "" / >
                            <
                            div className = "bg" > < /div> <
                            div className = "price" > 320 kr. < /div> <
                            div className = "name" > Debbie Gibson < span > Musicians < /span></div >
                            <
                            /a> <
                            /div> <
                            /div> <
                            /div>
                        )
                    })
                    // console.log(data.person[i])
                    // console.log(data.person[i].avatar);                    
            })
        )
    }
}

export default Categories