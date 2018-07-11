<h1>Rick and Morty app by Santeri Salonen</h1>

<h3>How to install (assuming NPM has been installed)</h3>

<ol>
    <li>Run <b>npm install</b> after cloning</li>
    <li>Run <b>npm run dev</b> to start the application in development mode. The app will open a new browser tab in <i>localhost:8080</i></li>
    <li>To get an optimized production build, run <b>npm run build</b></li>
</ol>

This app is a React- and Redux-based application for fetching data related to <i>Rick and Morty</i> from a dedicated API and storing the data with Redux.

The application has the following features:

<ul>
    <li>Fetching data from the API with Axios</li>
    <li>Using Redux for state management and storing the API data</li>
    <li>Rendering the data in an HTML table</li>
    <li>Pagination with "next page" and "previous page" buttons</li>
    <li>Styled components used for small styling</li>
</ul>

Caveats:

<ul>
    <li>Use of a separate Container-component was for including more routes, namely a "Details"-page, but I didn't want to spend too much time on this yet</li>
    <li>UI is not pretty to look at, as the small styles in styled components are namely just for proving the concept</li>
</ul>