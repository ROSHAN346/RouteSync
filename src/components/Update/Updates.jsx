import React from 'react'
import "./Update.css"


const Update = () => {
  return (
    <div>

{/* <!-- Navigation Bar --> */}
    <nav class="navbar">
        <div class="navbar-brand">Bus Scheduling System</div>
        <div class="navbar-menu">
            <a class="navbar-link" href="#dashboard">Dashboard</a>
            <a class="navbar-link" href="#schedule-management">Schedule Management</a>
            <a class="navbar-link" href="#route-planning">Route Planning</a>
            <a class="navbar-link" href="#real-time-data">Real-time Data</a>
            <a class="navbar-link" href="#reports">Reports</a>
        </div>
    </nav>
    <div>

        
    </div>
    <div class="container">
        {/* <!-- Dashboard component --> */}
        <div id="dashboard" class="section">
            <h1>Dashboard</h1>
            <div class="dashboard-grid">
                <div class="card">
                    <h5 class="card-title">Bus Schedules</h5>
                    <ul>
                        <li>Route 1: 8:00 AM - 9:00 AM</li>
                        <li>Route 2: 9:00 AM - 10:00 AM</li>
                    </ul>
                </div>
                <div class="card">
                    <h5 class="card-title">Bus Locations</h5>
                    <ul>
                        <li>Bus 1: 43.6532, -79.3832</li>
                        <li>Bus 2: 43.6567, -79.3921</li>
                    </ul>
                </div>
                <div class="card">
                    <h5 class="card-title">Passenger Demand</h5>
                    <ul>
                        <li>Route 1: 50 passengers</li>
                        <li>Route 2: 30 passengers</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* <!-- Schedule Management component --> */}
        <div id="schedule-management" class="section">
            <h1>Schedule Management</h1>
            <form class="form">
                <div class="form-group">
                    <label for="route-id">Route ID</label>
                    <input type="text" id="route-id" class="form-input"/>
                </div>
                <div class="form-group">
                    <label for="departure-time">Departure Time</label>
                    <input type="time" id="departure-time" class="form-input"/>
                </div>
                <div class="form-group">
                    <label for="arrival-time">Arrival Time</label>
                    <input type="time" id="arrival-time" class="form-input"/>
                </div>
                <button type="submit" class="btn">Create Schedule</button>
            </form>
        </div>

        {/* <!-- Route Planning component --> */}
        <div id="route-planning" class="section">
            <h1>Route Planning</h1>
            <form class="form">
                <div class="form-group">
                    <label for="route-id">Route ID</label>
                    <input type="text" id="route-id" class="form-input"/>
                </div>
                <div class="form-group">
                    <label for="stops">Stops</label>
                    <textarea id="stops" class="form-input"></textarea>
                </div>
                <button type="submit" class="btn">Plan Route</button>
            </form>
        </div>

        {/* <!-- Real-time Data component --> */}
        <div id="real-time-data" class="section">
            <h1>Real-time Data</h1>
            <div class="dashboard-grid">
                <div class="card">
                    <h5 class="card-title">Current Bus Locations</h5>
                    <p>Live tracking data goes here.</p>
                </div>
                <div class="card">
                    <h5 class="card-title">Current Traffic Conditions</h5>
                    <p>Live traffic data goes here.</p>
                </div>
            </div>
        </div>

        {/* <!-- Enhanced Real-Time Data with Map --> */}
        <div id="real-time-map" class="section">
            <h5 class="card-title">Live Map</h5>
            <div id="map"></div>
        </div>

        {/* <!-- Reports component -->  */}
        <div id="reports" class="section">
            <h1>Reports</h1>
            <div class="form-group">
                <label for="report-type">Select Report Type</label>
                <select id="report-type" class="form-input">
                    <option value="daily">Daily Report</option>
                    <option value="weekly">Weekly Report</option>
                    <option value="monthly">Monthly Report</option>
                </select>
            </div>
            <button type="button" class="btn">Generate Report</button>
        </div>

        {/* <!-- Settings component --> */}
        <div id="settings" class="section">
            <h1>Settings</h1>
            <div class="form-group">
                <label for="language-select">Preferred Language</label>
                <select id="language-select" class="form-input">
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                </select>
            </div>
            <div class="form-group">
                <label for="notification-toggle">Enable Notifications</label>
                <input type="checkbox" id="notification-toggle" class="form-input"/>
            </div>
            <button type="button" class="btn">Save Settings</button>
        </div>

        {/* <!-- User Authentication Section --> */}
        <div id="auth" class="section">
            <h1>User Authentication</h1>
            <form id="login-form" class="form">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-input" id="username" placeholder="Enter username"/>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-input" id="password" placeholder="Password"/>
                </div>
                <button type="submit" class="btn btn-success">Login</button>
            </form>
            <p class="mt-2">Don't have an account? <a href="#">Sign up</a></p>
        </div>

        {/* <!-- Data Visualization Section --> */}
        <div id="data-visualization" class="section">
            <h1>Data Visualization</h1>
            <div class="dashboard-grid">
                <div>
                    <canvas id="busRouteChart"></canvas>
                </div>
                <div>
                    <canvas id="trafficConditionChart"></canvas>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Footer --> */}
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-section">
                <h5>Contact Us</h5>
                <p>Email: support@transittracker.com<br/>Phone: +1 (123) 456-7890</p>
            </div>
            <div class="footer-section">
                <h5>Follow Us</h5>
                <div class="social-links">
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            © 2024 Transit Tracker
        </div>
    </footer>

    </div>
    
  )
}

export default Update
