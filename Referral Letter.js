function referralLetter(name, gender, injuryArea, handDominance, occupation, injuryDescription, finding1, finding2, finding3, diagnosis, splintType, splintReason, treatmentTimeframe) {
    return `Thank you for referring ${name} to Melbourne Hand Rehab for treatment of ${gender} ${injuryArea}. ${name} is a ${handDominance} hand dominant ${occupation} who has been experiencing a ${injuryDescription}.

    Assessment findings:
    
    <ol>
        <li>${finding1}</li>
        
        <li>${finding2}</li>
        
        <li>${finding3}</li>
    <ol>
    
    These findings are consistent with a diagnosis of ${diagnosis}. Today I have fabricated a ${splintType} splint to ${splintReason}. I plan to review ${name} in ${treatmentTimeframe} for a splint adjust and commencement of a home exercise program.
    
    Please feel free to contact me if you have any questions or would like to discuss ${name}'s management further.
    
    `
}

function createReferralLetter() {
    let letter = document.getElementById("letter")
    let name = document.getElementById('Name').value
    let gender
    if (document.getElementById('his').checked == true) {
        gender = document.getElementById('his').value
    } else if(document.getElementById('her').checked == true) {
        gender = document.getElementById('her').value
    } else {
        gender = 'their'
    }
    let injuryArea = document.getElementById('Injury area').value
    let handDominance = document.getElementById('Hand dominance').value
    let occupation = document.getElementById('Occupation').value
    let injuryDescription = document.getElementById('Injury description').value
    let finding1 = document.getElementById('Finding 1').value
    let finding2 = document.getElementById('Finding 2').value
    let finding3 = document.getElementById('Finding 3').value
    let diagnosis = document.getElementById('Diagnosis').value
    let splintType = document.getElementById('Splint type').value
    let splintReason = document.getElementById('Splint reason').value
    let treatmentTimeframe = document.getElementById('Treatment timeframe').value
letter.innerHTML = referralLetter(name, gender, injuryArea, handDominance, occupation, injuryDescription, finding1, finding2, finding3, diagnosis, splintType, splintReason, treatmentTimeframe)
}