package simulator.Server.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import simulator.Server.ConfigConstants;
import simulator.Server.datatypes.File;

@CrossOrigin(origins = ConfigConstants.clientURL)
@RestController
public class FileController {

    @GetMapping(ConfigConstants.filesPathPrefix + "/get")
    public List<File> getFiles() {
        List<File> files = new ArrayList<>();  
        files.add(new File("First.x68", "First Content"));
        files.add(new File("Second.x68", "Second Content"));
        files.add(new File("Third.x68", "Third Content"));
        return files;
    }
}

