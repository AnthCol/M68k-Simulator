package simulator.Server.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

import simulator.Server.ConfigConstants;
import simulator.Server.datatypes.File;

@CrossOrigin(origins = ConfigConstants.clientURL)
@RestController
public class FileController {

    @Autowired
    private JdbcTemplate databaseInterface;


    @GetMapping(ConfigConstants.filesPathPrefix + "/get")
    public List<File> getFiles() {
        List<File> files = new ArrayList<>();  

        String query = "SELECT name, content FROM files";

        databaseInterface.query(query, (resultSet, rowNum) -> {
            File file = new File();  
            file.setName(resultSet.getString("name"));
            file.setContent(resultSet.getString("content"));
            files.add(file);
            return file;
        });
        
        return files;
    }


    @PostMapping(ConfigConstants.filesPathPrefix + "/new")
    public void newFile(@RequestBody File file) {
        String query = "INSERT INTO files (name, content) VALUES (?, ?)";
        String fileName = file.getName();
        String fileContent = file.getContent();
        databaseInterface.update(query, fileName, fileContent);
        System.out.println("file inserted into database: ");
        System.out.println("filename: " + fileName);
        System.out.println("fileContent: " + fileContent);
        return;
    }


}
