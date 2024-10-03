package simulator.Server;

import java.io.*;
import java.util.*;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class Server {

    // @RequestMapping("/")
    // public void home() {
    //     System.out.println("Home path\n");
    // }

    // @RequestMapping("/new")
    // public void newButton() {
    //     System.out.println("New path\n");
    // }

    // @RequestMapping("/save")
    // public void save() {
    //     System.out.println("Save\n");
    // }

    // @RequestMapping("/delete")
    // public void delete() {
    //     System.out.println("Delete\n");
    // }

	public static void main(String[] args) {
		SpringApplication.run(Server.class, args);
	}

}
