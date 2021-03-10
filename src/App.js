import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <div id="wrapper">
    <header>
      <h1>Eyes Up Here Settings</h1>
    </header>

    <article>
       <form id="settings" action="settings.html" method="POST">
           <p>
               Attention Prompt Customization - How would you like the app to regain your student's attention?
           </p>
           <input type="checkbox" name="customization" value="statement" id="statement" />
           App will say "Eyes up here" <br/>
           <input type="checkbox" name="customization" value="sounds" id="sounds" />
           App will play an alarm sound <br/>
           <input type="checkbox" name="customization" value="screen" id="screen" />
           Screen will flash different colors<br/>


           <p>Attention Prompt will activate when the student looks away for
               <select id="activatePrompt">
                   <option value="30">30</option>
                   <option value ="60">60</option>
                   <option value="90">90</option>
                   <option value="120">120</option>
               </select>
               seconds.
           </p>
           <br/>
           <p>Notify me if the Attention Prompt is activated
               <select id="numberOfTimes">
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
                   <option value="4">4</option>
                   <option value="5">5</option>
               </select>
           times in a span of
               <select id="numberOfMinutes">
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
                   <option value="4">4</option>
                   <option value="5">5</option>
               </select>
           minutes.
           </p>
           <br/>
           <p>
               Notifications can be sent via SMS text message or email.  You can designate up to 5 different contacts to notify.
           </p>
           <div id="notificationMethod">
               <select>
                   <option value="Text" id="text">Text</option>
                   <option value="Email" id="email">Email</option>
               </select>
               <input type="text" name="notification" id="notification" />

               <input id="addNotificationMethod" type="button" value="+Add" />
               <br/>
           </div>

           <br/>
           <input type="submit" value="Save Settings" />
       </form>
    </article>

    </div>
    </div>
  );
}

export default App;
