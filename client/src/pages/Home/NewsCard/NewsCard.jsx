/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import moment from "moment";
import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import { FaRegBookmark, FaRegEye, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, total_view, rating } = news;

  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center">
      <Image style={{height:'40px'}} src={author?.img} roundedCircle />
      <div className="ps-2 flex-grow-1">
        <p className="mb-0">{author?.name}</p>
        <p><small> {moment(author.published_date).format('yyyy-MM-D')}</small></p>
      </div>
      <div>
        <FaRegBookmark></FaRegBookmark>
        <FaShareAlt></FaShareAlt>
      </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
            {details.length < 250 ? <>{details}</> : 
            <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link> </>
            }
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted d-flex">
        <div className="flex-grow-1">
            
            <span>{rating?.number}</span>
        </div>
        <div>
            <FaRegEye></FaRegEye> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
