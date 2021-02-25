import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePermissionDTO } from 'src/roles-and-permissions/dto/create-permission.dto';
import { DeleteOneParams } from '../dto/delete-one.dto';
import { FindOneParams } from '../dto/find-one.dto copy';
import { UpdatePermissionDTO } from '../dto/update-permission.dto';
import { PermissionService } from '../services/permission.service';

@Controller('permissions')
export class PermissionController {
  constructor(private permissionService: PermissionService) {}

  @Post()
  public post(@Body() dto: CreatePermissionDTO) {
    return this.permissionService.create(dto);
  }

  @Get('/:id')
  public async getById(@Param() params: FindOneParams) {
    return await this.permissionService.findOne(params.id);
  }

  @Get()
  public async getAll() {
    return await this.permissionService.findAll();
  }

  @Put('/:id')
  async update(
    @Param('id') permissionId: string,
    @Body() permissionDto: UpdatePermissionDTO,
  ) {
    return await this.permissionService.update(permissionId, permissionDto);
  }

  @Delete('/:id')
  public async delete(@Param() params: DeleteOneParams) {
    return await this.permissionService.remove(params.id);
  }
}
