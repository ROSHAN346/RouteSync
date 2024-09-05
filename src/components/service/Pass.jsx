import React from 'react'
import "./Pass.css"

const Pass = () => {
  return (
    <div className='passbody'>
      <header className='tagbus'>
    <h1>Bus Pass & Ticket Booking</h1>
    <img src="https://images.unsplash.com/photo-1600501700474-208f2a07f3e0" alt="Bus Header Image" className="header-image" />
     </header>

<main>
    <section className="container">
        <div className="card booking-form">
            <h2>Book Your Ticket</h2>
            <img src="https://www.bing.com/images/search?view=detailV2&ccid=zOIHctj2&id=8C5CBF63954854AA15921AEF6E529F088E2D4840&thid=OIP.zOIHctj20zNEKE6y2uNDTQHaHa&mediaurl=https%3a%2f%2fcdn-icons-png.flaticon.com%2f512%2f1036%2f1036175.png&exph=512&expw=512&q=bus+ticket+logo&simid=607993612776910389&FORM=IRPRST&ck=8D6F54389C2B2D225E27DCDD5BC08ACB&selectedIndex=12&itb=1" alt="Bus Ticket" className="card-image" />
            <form id="booking-form">
                <label htmlFor="origin">Origin:</label>
                <input type="text" id="origin" name="origin" placeholder="Enter origin" required />

                <label htmlFor="destination">Destination:</label>
                <input type="text" id="destination" name="destination" placeholder="Enter destination" required />

                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" required />

                <label htmlFor="pass-type">Pass Type:</label>
                <select id="pass-type" name="pass-type" required>
                    <option value="one-way">One-way</option>
                    <option value="round-trip">Round-trip</option>
                </select>

                <button type="submit">Book Now</button>
                <p id="booking-message" className="message"></p>
            </form>
        </div>

        <div className="card pass-details">
            <h2>Check Bus Pass Details</h2>
            <img src="https://images.unsplash.com/photo-1578926281060-bb5f1d91c009" alt="Bus Pass" className="card-image" />
            <form id="pass-form">
                <label htmlFor="pass-id">Pass ID:</label>
                <input type="text" id="pass-id" name="pass-id" placeholder="Enter Pass ID" required />

                <button type="submit">Check Details</button>
                <p id="pass-message" className="message"></p>
            </form>
        </div>
    </section>

    <div class="viewworking">

        <div class="cardworking">
            <div class="contentworking">
                <div class="titlework">Service 1</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
            </div>
        </div>

        <div class="cardworking">
            <div class="contentworking">
                <div class="titlework">Service 1</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
            </div>
        </div>

        <div class="cardworking">
            <div class="contentworking">
                <div class="titlework">Service 1</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
            </div>
        </div>

        <div class="cardworking">
            <div class="contentworking">
                <div class="titlework">Service 1</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
            </div>
        </div>
        <div class="cardworking">
            <div class="contentworking">
                <div class="titlework">Service 1</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
            </div>
        </div>
        <div class="cardworking">
            <div class="contentworking">
                <div class="titlework">Service 1</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
            </div>
        </div>
        <div class="cardworking">
            <div class="contentworking">
                <div class="titlework">Service 1</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
            </div>
        </div>
        <div class="cardworking">
            <div class="contentworking">
                <div class="titlework">Service 1</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
            </div>
        </div>

    </div>

    

</main>


<footer>
    <p>&copy; 2024 Bus Booking System. All rights reserved.</p>
</footer>

    </div>
  )
}

export default Pass
