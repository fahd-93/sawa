import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';


const CardCampaign = (props) => {
    return (
        <div>
            <CardDeck>
                <Card bg="warning" border="primary" style={{ width: '16rem' }}>
                    <Card.Header>Featured</Card.Header>
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body className="text-center">
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
            </CardDeck>
                    <Card.Link to="">Card Link</Card.Link>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    )
}

export default CardCampaign;