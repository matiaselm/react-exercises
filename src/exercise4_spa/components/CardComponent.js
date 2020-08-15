import React from 'react';
import Card from 'react-bootstrap/Card';

const CardComponent = (props) => {
    const width = props.width;
    const header = props.header;
    const title = props.title;
    const text = props.text;
    const imgSource = props.imgSource;

    const link = props.link;
    const linkTo = props.linkTo;

    return <Card style={{ width: `${width}` }} >

        <Card.Img variant="top" src={imgSource} />
        <Card.Header>{header}</Card.Header>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Card.Link href={link}>{linkTo}</Card.Link>
        </Card.Body>
    </Card>
}

export default CardComponent;