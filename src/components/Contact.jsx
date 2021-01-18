import React from "react";
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Contact = () => {
  return (
    <div>
      <h2>Responsive Contact Section</h2>
      <p>Resize the browser window to see the effect.</p>

      <Container>
        <div>
          <h2>Contact Us</h2>
          <p>Swing by for a cup of coffee, or leave us a message:</p>
        </div>
        <div class="row">
          <div class="column">
            <img src="/w3images/map.jpg" alt="foo" />
          </div>
          <div class="column">
            <form>
              <label for="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />
              <label for="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />
              <label for="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
              ></textarea>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
