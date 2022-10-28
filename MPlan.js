function managementPlan(diagnosis,splint, imaging, imagingdate, finding, timeframe, limb) {
    return `Management Plan

Diagnosis

<p> ${diagnosis} </p>
<p> Time frame: With conservative management, symptoms may settle within 12 weeks. </p>

<h2> Treatment Goals </h2>

<ol>
   <li> Recovery of your hand function to the highest level. </li>

   <li> Address the root cause of the problem and not just the symptoms. </li>

   <li> Getting you back to comfortable and confident use of your hands for school, daily function, and participation in meaningful life events. </li>
</ol>

<h2> Progress Plan </h2>

<ol>
    <li> Splinting: Your condition is best managed with a ${splint} splint. </li>

    <li> Imaging: Your injury as assessed in clinic is consistent with ${diagnosis}. Your ${imaging} study conducted on the ${imagingdate} indicated a ${finding}, which assisted with this diagnosis. </li>

    <li> Soft tissue: We will work to reduce your pain using massage, exercise and stretches. </li>

    <li> Rehab: Once the initial problem has settled down, we will work with you to strengthen your ${limb} and prepare you for your goal of returning to normal and pain-free use of the hands. </li>
</ol>

<h2> Review </h2>

I will see you in ${timeframe} for a progress appointment to expand on todays examination findings and provide you with 2-3 exercises specific for you.

<h2> Contact details </h2>

Reception phone: 9458 5166 fax: 9458 5177 Email info@melbournehand.com.au


`
}

function createPlan() {
    let plan = document.getElementById("Plan");
    let diagnosis = document.getElementById("Diagnosis").value
    let splintType = document.getElementById("Splint type").value
    let imaging = document.getElementById('Imaging').value
    let imagingDate = document.getElementById("Imaging date").value
    let imagingResults = document.getElementById('Imaging results').value
    let treatmentTimeframe = document.getElementById('Treatment timeframe').value
    let injuryLocation = document.getElementById('Location of injury').value
plan.innerHTML = managementPlan(diagnosis, splintType, imaging, imagingDate, imagingResults, treatmentTimeframe, injuryLocation)
}

