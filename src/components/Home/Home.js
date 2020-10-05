import React from 'react';
import { Button, Card, Col, Container, FormControl, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory();
    const handleItem = (title) => {
        history.push(`/register/${title}`);
    }
    const workItems = [
        {
            title: 'Child Support',
            imgUrl: 'https://i.ibb.co/6Ft1TKN/child-Support.png',
            color: '#AAD787'

        },
        {
            title: 'Refuge Shelter',
            imgUrl: 'https://i.ibb.co/Pc56PBY/refuse-Shelter.png',
            color: '#2A607D'
        },
        {
            title: 'Food Charity',
            imgUrl: 'https://i.ibb.co/SxQwz6P/food-Charity.png',
            color: '#16413B'
        },
        {
            title: 'Host a river clean-up',
            imgUrl: 'https://i.ibb.co/x6fZyx0/river-Clean.png',
            color: '#8BA9D8'
        },
        {
            title: 'Host a Clothing Swap',
            imgUrl: 'https://i.ibb.co/XSDjPtW/cloth-Swap.png',
            color: '#8A9BD8'
        },
        {
            title: 'Clean Water for Children',
            imgUrl: 'https://i.ibb.co/JpWcYYb/clean-Water.png',
            color: '#2A7E3A'
        },
        {
            title: 'Good Education',
            imgUrl: 'https://i.ibb.co/9hKFdsj/good-Education.png',
            color: '#395AAB'
        },
        {
            title: 'New Books for Children',
            imgUrl: 'https://i.ibb.co/4dkrD90/newBooks.png',
            color: '#3DB5B6'
        },
        {
            title: 'Host a study group',
            imgUrl: 'https://i.ibb.co/sK0Rs5J/study-Group.png',
            color: '#3983AC'
        },
        {
            title: 'Build Birdhouses',
            imgUrl: 'https://i.ibb.co/GPYG7kr/bird-House.png',
            color: '#A68237'
        },
        {
            title: 'Organise books at the library',
            imgUrl: 'https://i.ibb.co/CwV85Nb/library-Books.png',
            color: '#16413B'
        },
        {
            title: 'Give free music lessons',
            imgUrl: 'https://i.ibb.co/9g7s9Vp/music-Lessons.png',
            color: '#3CB36C'
        }
    ]
    return (
        <Container className="App">
            <h1 style={{ textAlign: 'center', color: 'black', padding: '30px' }}>I Grow By Helping People in Need</h1>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{ margin: '30px' }} />
            <Row >

                {
                    workItems.map(workItem =>
                        <Col md={3} style={{ marginBottom: '15px', color: 'white', textAlign: 'center', cursor: 'pointer' }} onClick={() => handleItem(workItem.title)}>
                            {/* <Link to='/register/' style={{ textDecoration: 'none', color: 'white', textAlign: 'center' }}> */}
                            <Card style={{ borderRadius: '9px' }}>
                                <Card.Img variant="top" src={workItem.imgUrl} />
                                <Card.Body style={{ backgroundColor: `${workItem.color}`, borderBottomLeftRadius: '9px' }}>
                                    <Card.Title className="small">{workItem.title}</Card.Title>
                                </Card.Body>
                            </Card>
                            {/* </Link> */}
                        </Col>)
                }



            </Row>

        </Container>
    );
};

export default Home;