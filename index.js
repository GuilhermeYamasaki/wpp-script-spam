async function floodarChat(scriptText){
    const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line)
	const main = document.querySelector("#main")
	const textarea = main.querySelector(`div[contenteditable="true"]`)

	if(!textarea) {
		throw new Error("Não há uma conversa aberta")
	}

	for(const line of lines){

		textarea.textContent = line
		textarea.dispatchEvent(new InputEvent("input", { bubbles: true }));

		(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click()
		
		if(lines.indexOf(line) !== lines.length - 1) {
			await new Promise(resolve => setTimeout(resolve, 125))
		}
	}

	return lines.length
}


const repeat = "hello\n".repeat(100)
floodarChat(repeat)
