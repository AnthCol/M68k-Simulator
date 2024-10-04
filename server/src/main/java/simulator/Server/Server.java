package simulator.Server;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import simulator.Server.ConfigConstants;
import simulator.Server.datatypes.File;

@SpringBootApplication
public class Server {
	public static void main(String[] args) {
		SpringApplication.run(Server.class, args);
	}
}
