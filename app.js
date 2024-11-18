document.addEventListener("DOMContentLoaded", () => {
    const classifyButton = document.getElementById("classifyButton");
    const recordButton = document.getElementById("recordButton");
    const audioDropdown = document.getElementById("audioDropdown");
    const output = document.getElementById("output");

    // Populate audioDropdown with audio file names (fetch from backend in production)
    const audioFiles = ["audio1.wav", "audio2.wav", "audio3.wav"]; // Example data
    audioFiles.forEach(file => {
        const option = document.createElement("option");
        option.value = file;
        option.textContent = file;
        audioDropdown.appendChild(option);
    });

    // Event handler for classify button
    classifyButton.addEventListener("click", async () => {
        const selectedAudio = audioDropdown.value;
        output.textContent = `Classifying ${selectedAudio}...`;

        // Make a request to backend for classification (replace with actual endpoint)
        // const response = await fetch("/classify-audio", { method: "POST", body: JSON.stringify({ audio: selectedAudio }) });
        // const result = await response.json();

        // Example output
        output.textContent = `Classification result for ${selectedAudio}: Healthy Control (HC)`;
    });

    // Event handler for record button
    recordButton.addEventListener("click", async () => {
        output.textContent = "Recording audio...";

        // Simulate recording process, actual recording may involve backend call
        setTimeout(() => {
            output.textContent = "Classifying recorded audio...";
            // Simulate classification result
            output.textContent = "Recorded audio classification: Parkinson Disease (PwPD)";
        }, 3000); // Example delay
    });
});
