### M68k-Simulator (Work In Progress)

> A web-based development environment and simulator for the [Motorola 68000](https://en.wikipedia.org/wiki/Motorola_68000)!

### Technologies



<p align="left"> 
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> 
<a href="https://spring.io/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring" width="40" height="40"/> </a> 
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> 
<a href="https://www.java.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/> </a> 
<a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </a> 
<a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a> 
</p>


### Roadmap

- [x] Create basic design for frontend
- [x] Connect frontend, server, and database together
- [ ] Implement the M68k simulator logic
- [ ] Make database persistent across launches
- [ ] Upgrade frontend to include things such as STDIN
- [ ] Allow users to create separate accounts


### Prerequisites

To use this project, you must have [Docker](https://www.docker.com/) installed, and a web browser. That's it!

### Usage

```bash
# All docker commands should be done from the root directory of this project. 
# To start the program up, run the following comand:
docker compose up --build

# Once complete, access the following address:
https://localhost:5173

# To shut the program down do the following:
docker compose down


# Scripts have also been provided for your convenience:
./run.ps1
./run.sh

# These scripts will run the following commands in order:
docker compose down
docker compsose up --build
```

### Motivation

When I was a student at the University of Guelph, we learned how to program in assembly using a simulator of the Motorola 68000. The only problem was that the tool we used was windows specific, and quite old. I felt like exposing myself to some more web technologies, and I also felt like docker was a good way to make it easily accessible to all students - mainly because it is a technology that they are already exposed to at the University of Guelph. 

### Limitations

This simulator does not provide any hardware simulation outside of output to the console.
Futhermore, only instructions for the M68000 board will are implemented. There are other processors in the M68k *family*, and there may be instructions supported by those boards but not by the 68000 board. To see what instructions are supported, see page XXX of the M68k Programmers Reference Manual. 

I wouldn't mind implementing these instructions and hardware simulation in the future, but for the purpose of course at the University of Guelph, what
is here will be enough for the very large majority of things required of students. 


