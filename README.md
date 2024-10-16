### M68k-Simulator (Work In Progress)

> A web-based development environment and simulator for the [Motorola 68000](https://en.wikipedia.org/wiki/Motorola_68000)!


![GitHub last commit](https://img.shields.io/github/last-commit/AnthCol/M68k-Simulator) <br/>
![GitHub repo size](https://img.shields.io/github/repo-size/AnthCol/M68k-Simulator)


### Technologies

<p align="left">
    <a href="https://reactjs.org/" target="_blank" rel="noreferrer" style="text-decoration: none;">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
    </a>
    <a href="https://spring.io/" target="_blank" rel="noreferrer" style="text-decoration: none;">
        <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring" width="40" height="40"/>
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer" style="text-decoration: none;">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
    </a>
    <a href="https://www.java.com" target="_blank" rel="noreferrer" style="text-decoration: none;">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/>
    </a>
    <a href="https://www.postgresql.org" target="_blank" rel="noreferrer" style="text-decoration: none;">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/>
    </a>
    <a href="https://www.docker.com/" target="_blank" rel="noreferrer" style="text-decoration: none;">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/>
    </a>
</p>


![Static Badge](https://img.shields.io/badge/React%20Version-18.3.1-blue) <br/>
![Static Badge](https://img.shields.io/badge/Spring%20Boot%20Version-3.3.4-green) <br/>
![Static Badge](https://img.shields.io/badge/Java%20Version-17-brown) <br/>
![Static Badge](https://img.shields.io/badge/PostgreSQL%20Version-17-lightblue)

### Roadmap

- [x] Create basic design for frontend
- [x] Connect frontend, server, and database together
- [ ] Implement the M68k simulator logic (tokenizer, parser, interpreter)
- [ ] Make database persistent across launches
- [ ] Upgrade frontend to include things such as STDIN, at this time improve the appearance as well
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
docker compose up --build
```

### Motivation

When I was a student at the University of Guelph, we learned how to program in assembly using a simulator of the Motorola 68000. The only problem was that the tool we used was windows specific, and quite old. I felt like exposing myself to some more web technologies, and I also felt like docker was a good way to make it easily accessible to all students - mainly because it is a technology that they are already exposed to at the University of Guelph. 

### Limitations

This simulator does not provide any hardware simulation outside of output to the console.
Futhermore, only instructions for the Motorola 68000 microprocessor are implemented. There are other processors in the M68k *family*, and there may be instructions supported by them, but not the 68000. To see what instructions are supported, see Appendix A of the [M68k Programmers Reference Manual](https://m680x0.github.io/ref/M68000PM_AD_Rev_1_Programmers_Reference_Manual_1992.pdf).

I wouldn't mind implementing the 'missing' instructions, as well as the hardware simulation in the future, but for the purpose of the course at the University of Guelph, what is here is enough for the very large majority of tasks in the course. 
