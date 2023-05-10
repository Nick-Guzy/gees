import React from "react";
import Accordion from 'react-bootstrap/Accordion';

function FaqSection() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Where are ingridients sourced?</Accordion.Header>
        <Accordion.Body>
        Our company sources its ingredients from reputable suppliers who prioritize sustainable and ethical practices. We believe in using only the highest quality, natural and organic ingredients in our products. Our team conducts thorough research and vetting of all suppliers to ensure they align with our values and standards. We also prioritize working with local suppliers to reduce our carbon footprint and support the local economy.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Are your ingridients organic?</Accordion.Header>
        <Accordion.Body>
        Yes, we have a range of products specially formulated for sensitive skin. Our products are designed to be gentle and soothing, using natural ingredients that are less likely to cause irritation or allergic reactions. We also avoid using harsh chemicals, synthetic fragrances, and other common irritants that can be found in many commercial skin care products. Our sensitive skin products have undergone rigorous testing to ensure they are safe and effective, and we stand behind their quality.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Do you have products for sensitive skin?</Accordion.Header>
        <Accordion.Body>
        We are committed to minimizing our environmental impact and maximizing our social impact. We use sustainable and eco-friendly practices throughout our supply chain, from sourcing ingredients to packaging and shipping. We also support fair trade and ethical labor practices, and strive to make a positive difference in the communities where our ingredients are sourced. We are proud to say that our economic footprint is significantly lower than many comparable companies, and we continue to look for ways to improve and innovate in this area.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>How does your economic footprint compare to comperable companies?</Accordion.Header>
        <Accordion.Body>
        We are committed to minimizing our environmental impact and maximizing our social impact. We use sustainable and eco-friendly practices throughout our supply chain, from sourcing ingredients to packaging and shipping. We also support fair trade and ethical labor practices, and strive to make a positive difference in the communities where our ingredients are sourced. We are proud to say that our economic footprint is significantly lower than many comparable companies, and we continue to look for ways to improve and innovate in this area.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>What kind of packaging is used?</Accordion.Header>
        <Accordion.Body>
        We use environmentally-friendly and sustainable packaging materials, such as glass bottles and jars, aluminum tubes, and biodegradable or compostable plastics. We avoid using excess packaging and materials that are difficult to recycle, and we encourage our customers to reuse or recycle our packaging whenever possible. We believe that sustainability should be a top priority for all companies, and we are committed to doing our part to reduce waste and protect the planet.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Can you ship anywhere in the world?</Accordion.Header>
        <Accordion.Body>
        Yes, we offer worldwide shipping. However, please note that some restrictions may apply based on local regulations and customs policies. Shipping rates and times may vary depending on your location and the shipping method you choose at checkout. We are committed to providing our customers with a reliable and affordable shipping experience, and we work with a variety of carriers to ensure that your order arrives safely and on time.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Are your products carried in stores as well?</Accordion.Header>
        <Accordion.Body>
        Yes, we are proud to partner with a select group of retailers who share our commitment to natural and organic skin care. You can find our products in a growing number of stores across the country, and we are always looking for new partnerships and opportunities to expand our reach. You can also purchase our products directly from our website, where you will find our full range of products and special offers. We are committed to making our products accessible to everyone, and we welcome feedback and suggestions from our customers.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default FaqSection;