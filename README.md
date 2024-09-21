### M68k-Simulator (Work In Progress)

A simulator for the [Motorola 68000](https://en.wikipedia.org/wiki/Motorola_68000)!

### Technologies

- React
- Spring Boot
- PostgreSQL
- Docker
- Vite

### Stages

- [ ] Design frontend as simple text editor
- [ ] Make backend and database work for text files
- [ ] Make accounts work
- [ ] Upgrade frontend
- [ ] Implement M68k interpreter

### Usage

```bash
# The command to start the program is below:
docker compose up --build
# Assuming this is successful (which is should be)
# You can then visit http://localhost:3000 for the simulator

# To shut the program down do the following:
docker compose down

# Scripts have also been provided for your convenience:
./run.ps1
./run.sh
```

### Motivation

When I was a student at the University of Guelph, we learned how to program in assembly using a simulator of the Motorola 68000. The only problem was that the tool we used was windows specific, and quite old. I felt like exposing myself to some more web technologies, and I also felt like docker was a good way to make it easily accessible to all students - mainly because it is a technology that they are already exposed to at the University of Guelph. 

### Limitations

This is not a fully fleshed out simulator. It is not able to handle 100% of the things you would be doing on an M68k board. It only supports output to a console for example. I decided that fully implementing these things would not be worth it, since the students at Guelph (at least for me when I took the course) only output to something other than the console in the final lab. This simulator should suffice for the large majority of the work one will do in that course, and for me, that is all I really want to make at the moment.



