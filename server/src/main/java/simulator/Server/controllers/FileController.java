package simulator.Server.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
    private final String tableName = "files";

    @Autowired
    private JdbcTemplate databaseInterface;

    // FIXME consider adding the ResponseEntity class 
    // as return values instead of using void. 

    @GetMapping(ConfigConstants.filesPathPrefix + "/get")
    public List<File> getFiles() {
        List<File> files = new ArrayList<>();  
        String query = "SELECT name, content FROM " + tableName;
        try {
            databaseInterface.query(query, (resultSet, rowNum) -> {
                File file = new File();  
                file.setName(resultSet.getString("name"));
                file.setContent(resultSet.getString("content"));
                files.add(file);
                return file;
            });
        } catch (Exception e) {
            e.printStackTrace();
        } 
        return files;
    }

    @PostMapping(ConfigConstants.filesPathPrefix + "/new")
    public void newFile(@RequestBody File file) {
        String query = "INSERT INTO " + tableName + " (name, content) VALUES (?, ?)";
        String fileName = file.getName();
        String fileContent = file.getContent();
        try {
            databaseInterface.update(query, fileName, fileContent);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @DeleteMapping(ConfigConstants.filesPathPrefix + "/delete/{fileName}")
    public void deleteFile(@PathVariable String fileName) {
        String query = "DELETE FROM " + tableName + " WHERE name = ?";
        try {
            databaseInterface.update(query, fileName);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
