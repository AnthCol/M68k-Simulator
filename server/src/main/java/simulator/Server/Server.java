package simulator.Server;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;

import simulator.Server.ConfigConstants;
import simulator.Server.datatypes.File;

@SpringBootApplication
@RestController
public class Server {

    @CrossOrigin(origins = ConfigConstants.clientURL)
    @GetMapping("/api/files/get")
    public List<File> getFiles() {
        List<File> files = new ArrayList<File>(); 
        files.add(new File("First.x68", "First Content"));
        files.add(new File("Second.x68", "Second Content"));
        files.add(new File("Third.x68", "Third Content"));
        return files;
    }


	public static void main(String[] args) {
		SpringApplication.run(Server.class, args);
	}

}