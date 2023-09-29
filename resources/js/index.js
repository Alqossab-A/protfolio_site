let path = document.querySelector('.grey_blob path');
let originalD = path.getAttribute('d');

function parsePath(d) {
    // Split the path string into command-parameter groups
    let commands = d.split(/(?=[A-Za-z])/);

    // Map each command-parameter group to an object
    return commands.map((command) => {
        // The command letter is the first character of the group
        let letter = command[0];

        // The parameters are the rest of the group, split by spaces or commas
        let params = command
            .slice(1)
            .trim()
            .split(/[\s,]+/)
            .map(Number);

        return { command: letter, params: params };
    });
}

function adjustPath(commands) {
    // Adjust the parameters for each command
    let adjustedCommands = commands.map(command => {
        let adjustedParams = command.params.map(param => {
            let newParam = param + param * (Math.random() * 0.05 + 0.05);
            return isNaN(newParam) ? param : newParam;
        });
        return { command: command.command, params: adjustedParams };
    });

    return adjustedCommands;
}

function constructPath(commands) {
    // Reconstruct the `d` attribute
    let newD = commands
        .map((command) => command.command + command.params.join(' '))
        .join(' ');

    return newD;
}

setInterval(() => {
    // Parse the original `d` attribute into commands and parameters
    let commands = parsePath(originalD);

    // Adjust the parameters by 5-10% of the original values
    let adjustedCommands = adjustPath(commands);

    // Reconstruct the `d` attribute
    let newD = constructPath(adjustedCommands);

    // Apply the new `d` attribute to the path
    path.setAttribute('d', newD);
    console.log(newD);
}, 1000); // Change path every second
