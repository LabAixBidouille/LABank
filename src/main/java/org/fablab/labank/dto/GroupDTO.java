package org.fablab.labank.dto;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * Created by Kandel HANAFI on 08/03/2017.
 */
@Entity
@Table(name = "usersgroup")
public class GroupDTO {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idgroup")
    private Long idGroup;

    @NotNull
    @Column(name = "groupname")
    private String groupName;

    public GroupDTO(){}

    public GroupDTO(Long idGroup) {
        this.idGroup = idGroup;
    }

    public GroupDTO(GroupDTO groupDTO){
        this.idGroup = groupDTO.idGroup;
        this.groupName = groupDTO.groupName;
    }

    public Long getIdGroup() {
        return idGroup;
    }

    public void setIdGroup(Long idGroup) {
        this.idGroup = idGroup;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }
}
